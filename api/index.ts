import { handle } from '@hono/node-server/vercel'
import app from '../src/index'

const handler = handle(app)

export default async function vercelHandler(req: any, res: any) {
  try {
    return await handler(req, res)
  } catch (err) {
    // Prevent hard-crash (FUNCTION_INVOCATION_FAILED) and surface logs in Vercel
    console.error('Vercel function crash:', err)
    res.statusCode = 500
    res.setHeader('content-type', 'text/plain; charset=utf-8')
    res.end('Internal Server Error')
  }
}

