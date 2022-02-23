const express = require('express');

const router = express.Router();

router.get('/:categoriId/products/:productId', (req, res) => {
  const { categoriId, productId } = req.params;
  res.json({
    categoriId,
    productId,
    name: 'producto 2',
    price: 1500
  })
})

module.exports = router
