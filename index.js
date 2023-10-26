const express = require('express')
const app = express()
const port = 5000

app.get('/ping', (req, res) => {
  res.send('Pong!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})