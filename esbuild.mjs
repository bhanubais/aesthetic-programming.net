import * as esbuild from 'esbuild'

const options = {
  entryPoints: ['source/sketch.js'],
  bundle: true,
  logLevel: 'info',
  outdir: 'build',
  minify: true,
  sourcemap: true,
  loader: {
    '.html': 'text',
  },
  treeShaking: true,
}

const ctx = await esbuild.context(options)
await ctx.watch()
