import devServer from '@hono/vite-dev-server'
import nodeAdapter from '@hono/vite-dev-server/node'
import buildCloudflarePages from '@hono/vite-build/cloudflare-pages'
import buildNetlifyFunctions from '@hono/vite-build/netlify-functions'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  const target = process.env.DEPLOY_TARGET || 'cloudflare'
  return {
    plugins: [
      command === 'build'
        ? target === 'netlify'
          ? buildNetlifyFunctions({
              entry: 'src/index.tsx',
              outputDir: 'dist',
              output: 'functions/server/index.js'
            })
          : buildCloudflarePages({
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
