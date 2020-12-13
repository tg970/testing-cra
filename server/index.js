const express = require('express')
const app = express()
const port = 3001

app.get('/api/hw', (req, res) => {
  res.status(200).json('Hello World!')
})

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
