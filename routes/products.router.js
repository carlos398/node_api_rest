const express = require('express');

const ProudctService = require('../services/product.service')
const validatorHandler = require('./../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema')

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
router.get('/:id',
  validatorHandler(getProductSchema,'params'),
  (req, res, next) => {
      try {
        const { id } = req.params;
        const product = service.findOne(id)
        res.json(product)
      } catch (error) {
        next(error)
      }
    })

// METODO POST
router.post('/', validatorHandler(createProductSchema,'body'), (req, res) => {
  const body = req.body
  const newPorduct = service.create(body)
  res.status(201).json({
    message: 'created',
    data: newPorduct
  })
})

// PATCH
router.patch('/:id',
 validatorHandler(getProductSchema,'params'),
 validatorHandler(updateProductSchema,'body'),
 (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.json({
      message: 'update',
      data: product,
      id
    })
  } catch (error) {
    next(error)
  }
})

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params
  const rta = service.delete(id);
  res.json({
    message: 'delete',
    rta
  })
})

module.exports = router
