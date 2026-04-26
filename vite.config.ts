import devServer from '@hono/vite-dev-server'
import nodeAdapter from '@hono/vite-dev-server/node'
import build from '@hono/vite-build/cloudflare-pages'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  return {
    plugins: [
      command === 'build'
        ? build({
            entry: 'src/index.tsx',
            outputDir: 'dist',
            output: '_worker.js'
          })
        : devServer({
            adapter: nodeAdapter,
            entry: 'src/index.tsx'
          })
    ]
  }
})
