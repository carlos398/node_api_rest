const express = require('express');
const ProudctService = require('../services/product.service')

const router = express.Router();
const service = new ProudctService();

// generear data aleatoria segun el query que recibe
router.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})

// LO ESPECIFICO VA ANTES DE LO DINAMICO
// DINAMICO QUIERE DECIR QUE VARIA POR SUS VARIABLES, QUE CAMBIA
router.get('/filter', (req, res) => {
  res.send('yo soy un filter')
})

// path params obligatorios
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id)
  res.json(product)
})

// METODO POST
router.post('/', (req,res) => {
  const body = req.body
  const newPorduct = service.create(body)
  res.status(201).json({
    message: 'created',
    data: newPorduct
  })
})

// PATCH
router.patch('/:id', (req,res) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.json({
      message: 'update',
      data: product,
      id
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

// DELETE
router.delete('/:id', (req,res) => {
  const {id} = req.params
  const rta = service.delete(id);
  res.json({
    message: 'delete',
    rta
  })
})

module.exports = router
