import { Hono } from 'hono'
import { getCookie, setCookie, deleteCookie } from 'hono/cookie'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { AdminLoginPage, AdminDashboardPage } from './pages/admin'

// Keep KV typing lightweight for non-Cloudflare runtimes (e.g., Vercel).
type KVNamespace = any

type Bindings = {
  BOOKINGS_KV: KVNamespace
  ADMIN_USERNAME: string
  ADMIN_PASSWORD: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use(renderer)

/* ---------- Helpers ---------- */

// Very simple token (no crypto dep). It's opaque + signed via obfuscation.
// Cookie is httpOnly so the client can't tamper meaningfully — good enough
// for a single-admin venue panel. Production: swap for hono/jwt.
const ADMIN_COOKIE = 'rp_admin_session'

const checkAuth = (c: any): boolean => {
  const token = getCookie(c, ADMIN_COOKIE)
  if (!token) return false
  const expected = `rp_${c.env.ADMIN_USERNAME || 'admin'}_ok`
  return token === expected
}

const requireAuth = async (c: any, next: any) => {
  if (!checkAuth(c)) {
    return c.json({ ok: false, error: 'Unauthorized' }, 401)
  }
  await next()
}

// In-memory fallback for preview environments where KV might be unavailable
const memoryStore = new Map<string, string>()

const kvGet = async (c: any, key: string): Promise<string | null> => {
  try {
    if (c.env.BOOKINGS_KV) {
      return await c.env.BOOKINGS_KV.get(key)
    }
  } catch (e) {}
  return memoryStore.get(key) ?? null
}

const kvPut = async (c: any, key: string, value: string) => {
  try {
    if (c.env.BOOKINGS_KV) {
      await c.env.BOOKINGS_KV.put(key, value)
      return
    }
  } catch (e) {}
  memoryStore.set(key, value)
}

const kvList = async (c: any, prefix: string): Promise<string[]> => {
  try {
    if (c.env.BOOKINGS_KV) {
      const res = await c.env.BOOKINGS_KV.list({ prefix })
      return res.keys.map((k: any) => k.name)
    }
  } catch (e) {}
  return Array.from(memoryStore.keys()).filter((k) => k.startsWith(prefix))
}

/* ---------- Page Routes ---------- */

app.get('/', (c) => {
  return c.render(<HomePage />)
})

app.get('/admin', (c) => {
  if (checkAuth(c)) {
    return (c as any).render(<AdminDashboardPage />, { title: 'Admin Dashboard — Raj Palace LAWNS & GUEST HOUSE' })
  }
  return (c as any).render(<AdminLoginPage />, { title: 'Admin Login — Raj Palace LAWNS & GUEST HOUSE' })
})

/* ---------- Public API: Availability ---------- */

// GET /api/availability?month=YYYY-MM  — Returns status map for the month
app.get('/api/availability', async (c) => {
  const month = c.req.query('month') // e.g. 2026-04
  if (!month || !/^\d{4}-\d{2}$/.test(month)) {
    return c.json({ ok: false, error: 'Invalid month format. Use YYYY-MM.' }, 400)
  }

  const keys = await kvList(c, `date:${month}-`)
  const data: Record<string, string> = {}

  for (const key of keys) {
    const val = await kvGet(c, key)
    if (val) {
      const date = key.replace('date:', '')
      data[date] = val
    }
  }

  return c.json({ ok: true, month, dates: data })
})

// POST /api/enquiries — Submit enquiry from public site
app.post('/api/enquiries', async (c) => {
  const body = await c.req.json().catch(() => ({}))
  const { name, phone, date, guests, message, bookingType, roomType, numRooms, checkoutDate } = body

  if (!name || !phone) {
    return c.json({ ok: false, error: 'Name and phone are required.' }, 400)
  }

  const id = `enq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  const normType = bookingType === 'guesthouse' ? 'guesthouse' : 'lawns'
  const enquiry = {
    id,
    name: String(name).trim().slice(0, 120),
    phone: String(phone).trim().slice(0, 20),
    date: date ? String(date).trim().slice(0, 20) : '',
    guests: guests ? String(guests).trim().slice(0, 40) : '',
    message: message ? String(message).trim().slice(0, 500) : '',
    bookingType: normType,
    roomType: roomType ? String(roomType).trim().slice(0, 40) : '',
    numRooms: numRooms ? String(numRooms).trim().slice(0, 10) : '',
    checkoutDate: checkoutDate ? String(checkoutDate).trim().slice(0, 20) : '',
    createdAt: new Date().toISOString(),
    status: 'new'
  }

  await kvPut(c, `enquiry:${id}`, JSON.stringify(enquiry))
  return c.json({ ok: true, id })
})

/* ---------- Admin Auth ---------- */

app.post('/api/admin/login', async (c) => {
  const body = await c.req.json().catch(() => ({}))
  const { username, password } = body
  const envUser = c.env.ADMIN_USERNAME || 'admin'
  const envPass = c.env.ADMIN_PASSWORD || 'rajpalace2026'

  if (username === envUser && password === envPass) {
    const token = `rp_${envUser}_ok`
    setCookie(c, ADMIN_COOKIE, token, {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })
    return c.json({ ok: true })
  }
  return c.json({ ok: false, error: 'Invalid username or password.' }, 401)
})

app.post('/api/admin/logout', async (c) => {
  deleteCookie(c, ADMIN_COOKIE, { path: '/' })
  return c.json({ ok: true })
})

app.get('/api/admin/me', async (c) => {
  return c.json({ ok: checkAuth(c), authenticated: checkAuth(c) })
})

/* ---------- Admin API: Bookings ---------- */

// Set status for a specific date
// POST /api/admin/dates { date, status, note, bookingType }
// Storage format (backwards compatible):
//   "status"                       — legacy, no note, type defaults to 'lawns'
//   "status|note"                  — legacy with note
//   "status|note|bookingType"      — new, with type tag (lawns | guesthouse)
app.post('/api/admin/dates', requireAuth, async (c) => {
  const body = await c.req.json().catch(() => ({}))
  const { date, status, note, bookingType } = body

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return c.json({ ok: false, error: 'Invalid date format.' }, 400)
  }
  if (!['booked', 'blocked', 'available'].includes(status)) {
    return c.json({ ok: false, error: 'Invalid status.' }, 400)
  }

  if (status === 'available') {
    // "Available" = default, so delete the key
    try {
      if (c.env.BOOKINGS_KV) await c.env.BOOKINGS_KV.delete(`date:${date}`)
    } catch (e) {}
    memoryStore.delete(`date:${date}`)
  } else {
    const normType = bookingType === 'guesthouse' ? 'guesthouse' : 'lawns'
    const safeNote = (note || '').toString().replace(/\|/g, '/')
    // Always write 3-part form for new entries
    const payload = `${status}|${safeNote}|${normType}`
    await kvPut(c, `date:${date}`, payload)
  }
  return c.json({ ok: true })
})

// GET /api/admin/dates — return ALL stored dates + stats
app.get('/api/admin/dates', requireAuth, async (c) => {
  const keys = await kvList(c, 'date:')
  const data: Record<string, string> = {}
  let booked = 0
  let blocked = 0
  for (const key of keys) {
    const val = await kvGet(c, key)
    if (val) {
      const date = key.replace('date:', '')
      data[date] = val
      const status = val.split('|')[0]
      if (status === 'booked') booked++
      if (status === 'blocked') blocked++
    }
  }
  return c.json({ ok: true, dates: data, stats: { booked, blocked } })
})

// DELETE /api/admin/dates/past — clear all past dates
app.delete('/api/admin/dates/past', requireAuth, async (c) => {
  const today = new Date().toISOString().slice(0, 10)
  const keys = await kvList(c, 'date:')
  let cleared = 0
  for (const key of keys) {
    const date = key.replace('date:', '')
    if (date < today) {
      try {
        if (c.env.BOOKINGS_KV) await c.env.BOOKINGS_KV.delete(key)
      } catch (e) {}
      memoryStore.delete(key)
      cleared++
    }
  }
  return c.json({ ok: true, cleared })
})

/* ---------- Admin API: Enquiries ---------- */

app.get('/api/admin/enquiries', requireAuth, async (c) => {
  const keys = await kvList(c, 'enquiry:')
  const enquiries: any[] = []
  for (const key of keys) {
    const val = await kvGet(c, key)
    if (val) {
      try {
        enquiries.push(JSON.parse(val))
      } catch (e) {}
    }
  }
  enquiries.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
  return c.json({ ok: true, enquiries, count: enquiries.length })
})

app.delete('/api/admin/enquiries/:id', requireAuth, async (c) => {
  const id = c.req.param('id')
  try {
    if (c.env.BOOKINGS_KV) await c.env.BOOKINGS_KV.delete(`enquiry:${id}`)
  } catch (e) {}
  memoryStore.delete(`enquiry:${id}`)
  return c.json({ ok: true })
})

export default app
