const express = require('express');

const router = express.Router();

// query params son opcionales
// /users(?limit=10&offset=200)
// asi se envian los queri params obvio sin los parentesis pa
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('no hay parametros unu')
  }
})

module.exports = router
