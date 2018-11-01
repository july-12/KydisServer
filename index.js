const express = require('express')
const app = express()
const port = 4001

const APIV1 = require('./router/api/v1/index.js')

let myMiddleware = (res, req, next) => {
  console.log(new Date());
  next()
}

app.use(myMiddleware)

app.get('/', (req, res) => res.send('Hello Uyun!'))
app.use('/api/v1', APIV1)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
