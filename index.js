require('dotenv').config()
const express = require('express')
const app = express()

const APIV1 = require('./router/api/v1/index.js')

let myMiddleware = (res, req, next) => {
  console.log(new Date());
  next()
}

app.use(myMiddleware)

app.use(express.json())
app.use(express.urlencoded( { extended: false }))

app.get('/', (req, res) => res.send('Hello Uyun!'))
app.use('/api/v1', APIV1)

module.exports = app
