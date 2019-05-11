const express = require('express')
const app = express()
const port = 8080

var fs = require('fs')
var path = require('path')
var https = require('https')

app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var certOptions = {
  key: fs.readFileSync(path.resolve('build/cert/server.key')),
  cert: fs.readFileSync(path.resolve('build/cert/server.crt'))
}

var server = https.createServer(certOptions, app).listen(port)