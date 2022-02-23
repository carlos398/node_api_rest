const express = require('express');
const faker = require('faker')

const router = express.Router();
// generear data aleatoria segun el query que recibe
router.get('/', (req, res) => {
  const {size} = req.query
  const limit = size || 10
  const productos = []
  for (let index = 0; index < limit; index++){
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(productos)
})

// LO ESPECIFICO VA ANTES DE LO DINAMICO
// DINAMICO QUIERE DECIR QUE VARIA POR SUS VARIABLES, QUE CAMBIA
router.get('/filter', (req, res) => {
  res.send('yo soy un filter')
})

// path params obligatorios
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'producto 2',
    price: 1500
  })
})

module.exports = router
