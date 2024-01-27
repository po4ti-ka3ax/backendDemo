const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
    let other = 'Hello 123!!!'
    res.send(other)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})