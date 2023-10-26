const express = require('express')
const app = express()
const port = 5000

app.get('/ping', (req, res) => {
  res.send('Pong!')
})

app.get('/headers', (req, res) => {
  // Get all request headers
  const headers = req.headers;

  // Send the headers as a JSON response
  res.json(headers);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})