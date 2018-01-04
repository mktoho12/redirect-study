'use strict'
const http = require('http')
const server = http.createServer((req, res) => {
  res.writeHeader(302, { 'Location': 'https://google.jp'} )
  res.end()
})
const port = 8000
server.listen(port, () => {
  console.info(`listening on ${port}`)
})

