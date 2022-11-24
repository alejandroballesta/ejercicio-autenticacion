const express = require('express')
const path = require('path');

const app = express()
const port = 3001

app.get('/api/protectedData', (req, res) => {
  res.send('this is important data')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})