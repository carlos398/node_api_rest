const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hola mi server en express')
})

app.get('/new-route', (req, res) => {
  res.send('hello im a new route')
})

app.get('/products', (req, res) => {
  res.json({
    name: 'producto 1',
    price: 500
  })
})

app.listen(port, () => {
  console.log(`server runing on port ${port}`)
})
