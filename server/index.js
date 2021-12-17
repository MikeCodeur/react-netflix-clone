import path from 'path'
import fs from 'fs'

import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router-dom/server'
import {Helmet, HelmetProvider} from 'react-helmet-async'

import {App} from '../src/App'
const helmetContext = {}

const PORT = process.env.PORT || 3006
const app = express()

app.get('*', (req, res) => {
  // const app = ReactDOMServer.renderToString(
  //   <StaticRouter location={req.url}>
  //     <App />
  //   </StaticRouter>,
  // )
  const app = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>,
  )

  const indexFile = path.resolve('./build/index.html')
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }
    const {helmet} = helmetContext

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<head>
      ${helmet.title.toString()}
      ${helmet.priority.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
    </head><div id="root">${app}</div>`,
      ),
    )
  })
})

app.use(express.static('./build'))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
