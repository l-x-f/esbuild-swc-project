import * as React from 'react'
import * as Server from 'react-dom/server'

import './index.css'

const Greet = () => <h1>Hello, world! 100</h1>

const str = Server.renderToString(<Greet />)

window.onload = () => {
  const app = document.querySelector('#app')
  console.log(app?.tagName)
  app.innerHTML = str
}
