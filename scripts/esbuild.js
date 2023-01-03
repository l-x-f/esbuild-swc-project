const path = require('path')
const esbuild = require('esbuild')

const resolve = p => path.resolve(__dirname, p)

const banner = '/*!\n *copyright: xiaofei \n *auth: xiaofei \n */'

esbuild.build({
  target:'es6',
  entryPoints: [resolve('../src/app.jsx')],
  bundle: true,
  loader: { '.js': 'jsx' },
  outfile: resolve('../dist/esbuild/app.js'),
  minify: false,
  banner: {
    js: banner,
    css: banner
  }
})
