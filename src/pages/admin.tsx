export const AdminLoginPage = () => {
  return (
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-maroondark via-maroon to-maroondark p-4 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <img src="/static/images/facade-night.jpg" alt="" class="w-full h-full object-cover" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-maroondark/80 to-maroondark/95"></div>

      <div class="relative w-full max-w-md">
        <div class="text-center mb-8">
          <a href="/" class="inline-flex items-center gap-3 mb-5">
            <div class="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-golddark flex items-center justify-center shadow-xl">
              <i class="fas fa-crown text-white text-2xl"></i>
            </div>
            <div class="text-left">
              <div class="font-display text-2xl font-bold text-white">Raj Palace</div>
              <div class="text-[10px] tracking-[0.2em] uppercase text-gold">&amp; Lawns</div>
            </div>
          </a>
          <h1 class="font-display text-3xl text-white font-bold mb-2">Admin Panel</h1>
          <p class="text-ivory/70 text-sm">Sign in to manage bookings &amp; availability</p>
        </div>

        <form
          id="admin-login-form"
          class="glass-dark rounded-3xl p-7 border border-gold/30 shadow-2xl"
        >
          <div class="mb-5">
            <label class="block text-gold text-xs tracking-[0.25em] uppercase font-semibold mb-2">
              Username
            </label>
            <div class="relative">
              <i class="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"></i>
              <input
                type="text"
                name="username"
                required
                class="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-gold/30 text-white focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition"
                placeholder="admin"
              />
            </div>
          </div>

          <div class="mb-6">
            <label class="block text-gold text-xs tracking-[0.25em] uppercase font-semibold mb-2">
              Password
            </label>
            <div class="relative">
              <i class="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"></i>
              <input
                type="password"
                name="password"
                required
                class="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-gold/30 text-white focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div id="login-error" class="hidden mb-4 p-3 rounded-xl bg-red-500/20 border border-red-400/40 text-red-200 text-sm">
            <i class="fas fa-exclamation-circle mr-2"></i>
            <span id="login-error-message">Invalid credentials</span>
          </div>

          <button
            type="submit"
            class="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold to-goldlight text-maroon font-semibold hover:shadow-xl hover:scale-[1.02] transition"
          >
            <i class="fas fa-sign-in-alt mr-2"></i>
            Sign In
          </button>

          <div class="mt-5 text-center">
            <a href="/" class="text-ivory/60 hover:text-gold text-sm transition">
              <i class="fas fa-arrow-left mr-1"></i>
              Back to Website
            </a>
          </div>
        </form>
      </div>

      <script src="/static/admin.js"></script>
    </section>
  )
}

export const AdminDashboardPage = () => {
  return (
    <div class="min-h-screen bg-ivory">
      {/* Top Bar */}
      <header class="sticky top-0 z-40 bg-maroondark text-white shadow-lg border-b border-gold/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-golddark flex items-center justify-center shadow-lg">
                <i class="fas fa-crown text-white"></i>
              </div>
              <div>
                <div class="font-display text-lg font-bold">Raj Palace Admin</div>
                <div class="text-[10px] tracking-[0.2em] uppercase text-gold">Dashboard</div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <a href="/" target="_blank" class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-maroon transition text-sm">
                <i class="fas fa-external-link-alt text-xs"></i>
                View Site
              </a>
              <button id="admin-logout" class="px-4 py-2 rounded-full bg-red-500/20 border border-red-400/40 text-red-200 hover:bg-red-500 hover:text-white transition text-sm">
                <i class="fas fa-sign-out-alt mr-1"></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <section class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Booked Dates', id: 'stat-booked', icon: 'fa-calendar-check', color: 'from-red-500 to-red-600' },
            { label: 'Available', id: 'stat-available', icon: 'fa-calendar', color: 'from-green-500 to-green-600' },
            { label: 'Blocked', id: 'stat-blocked', icon: 'fa-ban', color: 'from-gray-500 to-gray-600' },
            { label: 'Enquiries', id: 'stat-enquiries', icon: 'fa-inbox', color: 'from-gold to-golddark' }
          ].map((s) => (
            <div class="bg-white rounded-2xl p-5 shadow-sm border border-maroon/5">
              <div class={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-3`}>
                <i class={`fas ${s.icon}`}></i>
              </div>
              <div id={s.id} class="font-display text-3xl font-bold text-maroon">0</div>
              <div class="text-maroon/60 text-xs tracking-wider uppercase">{s.label}</div>
            </div>
          ))}
        </section>

        <div class="grid lg:grid-cols-3 gap-6">
          {/* Calendar Manager */}
          <section class="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-maroon/5 overflow-hidden">
            <div class="p-6 border-b border-maroon/10 flex items-center justify-between">
              <div>
                <h2 class="font-display text-2xl text-maroon font-bold">
                  <i class="fas fa-calendar-alt text-gold mr-2"></i>
                  Calendar Management
                </h2>
                <p class="text-maroon/60 text-sm mt-1">Click any date to change its status</p>
              </div>
            </div>

            <div class="p-5 md:p-6">
              <div class="flex items-center justify-between mb-5">
                <button id="admin-cal-prev" class="w-10 h-10 rounded-full bg-maroon/5 hover:bg-maroon hover:text-gold text-maroon flex items-center justify-center transition">
                  <i class="fas fa-chevron-left"></i>
                </button>
                <div id="admin-cal-month" class="font-display text-xl md:text-2xl font-bold text-maroon">Month Year</div>
                <button id="admin-cal-next" class="w-10 h-10 rounded-full bg-maroon/5 hover:bg-maroon hover:text-gold text-maroon flex items-center justify-center transition">
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>

              <div class="flex flex-wrap gap-2 mb-4 justify-center">
                <span class="flex items-center gap-2 text-xs">
                  <span class="w-3 h-3 rounded bg-green-500"></span> Available
                </span>
                <span class="flex items-center gap-2 text-xs">
                  <span class="w-3 h-3 rounded bg-red-500"></span> Booked
                </span>
                <span class="flex items-center gap-2 text-xs">
                  <span class="w-3 h-3 rounded bg-gray-500"></span> Blocked
                </span>
              </div>

              <div class="grid grid-cols-7 gap-1 mb-1">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                  <div class="text-center text-maroon/50 text-xs uppercase font-semibold py-1">{d}</div>
                ))}
              </div>
              <div id="admin-cal-grid" class="grid grid-cols-7 gap-1"></div>
            </div>
          </section>

          {/* Side Panel: Date Editor + Enquiries */}
          <aside class="space-y-6">
            {/* Date Editor */}
            <div class="bg-white rounded-3xl shadow-sm border border-maroon/5 overflow-hidden">
              <div class="p-5 border-b border-maroon/10 bg-gradient-to-r from-maroon to-maroondark">
                <h3 class="font-display text-lg text-white font-bold">
                  <i class="fas fa-edit text-gold mr-2"></i>
                  Edit Selected Date
                </h3>
              </div>
              <div id="admin-edit-panel" class="p-5">
                <p class="text-maroon/50 text-sm text-center py-6">
                  <i class="fas fa-hand-pointer text-2xl mb-3 block"></i>
                  Click a date on the calendar to edit its status.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div class="bg-white rounded-3xl shadow-sm border border-maroon/5 p-5">
              <h3 class="font-display text-lg text-maroon font-bold mb-4">
                <i class="fas fa-bolt text-gold mr-2"></i>
                Quick Actions
              </h3>
              <div class="space-y-2">
                <button id="bulk-clear" class="w-full text-left px-4 py-3 rounded-xl bg-ivory hover:bg-maroon hover:text-gold text-maroon text-sm transition">
                  <i class="fas fa-eraser mr-2"></i>
                  Clear All Past Dates
                </button>
                <button id="bulk-refresh" class="w-full text-left px-4 py-3 rounded-xl bg-ivory hover:bg-maroon hover:text-gold text-maroon text-sm transition">
                  <i class="fas fa-sync-alt mr-2"></i>
                  Refresh Data
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Enquiries Table */}
        <section class="mt-8 bg-white rounded-3xl shadow-sm border border-maroon/5 overflow-hidden">
          <div class="p-6 border-b border-maroon/10 flex items-center justify-between flex-wrap gap-3">
            <div>
              <h2 class="font-display text-2xl text-maroon font-bold">
                <i class="fas fa-inbox text-gold mr-2"></i>
                Booking Enquiries
              </h2>
              <p class="text-maroon/60 text-sm mt-1">Recent enquiries from website visitors</p>
            </div>
            <button id="refresh-enquiries" class="px-4 py-2 rounded-full bg-maroon text-gold hover:bg-maroondark transition text-sm">
              <i class="fas fa-sync-alt mr-1"></i>
              Refresh
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-ivory">
                <tr>
                  <th class="text-left px-5 py-3 text-maroon text-xs tracking-wider uppercase font-semibold">Date</th>
                  <th class="text-left px-5 py-3 text-maroon text-xs tracking-wider uppercase font-semibold">Name</th>
                  <th class="text-left px-5 py-3 text-maroon text-xs tracking-wider uppercase font-semibold">Phone</th>
                  <th class="text-left px-5 py-3 text-maroon text-xs tracking-wider uppercase font-semibold">Event Date</th>
                  <th class="text-left px-5 py-3 text-maroon text-xs tracking-wider uppercase font-semibold">Guests</th>
                  <th class="text-left px-5 py-3 text-maroon text-xs tracking-wider uppercase font-semibold">Message</th>
                  <th class="text-left px-5 py-3 text-maroon text-xs tracking-wider uppercase font-semibold">Action</th>
                </tr>
              </thead>
              <tbody id="enquiries-tbody">
                <tr><td colspan={7} class="text-center py-10 text-maroon/50">Loading enquiries...</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Toast */}
      <div id="toast" class="fixed top-6 right-6 z-[120] hidden">
        <div class="bg-maroon text-gold px-6 py-4 rounded-xl shadow-2xl border border-gold/30 flex items-center gap-3">
          <i class="fas fa-check-circle text-xl"></i>
          <span id="toast-message">Success!</span>
        </div>
      </div>

      <script src="/static/admin-dashboard.js"></script>
    </div>
  )
}
