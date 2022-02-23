const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const categorieRouter = require('./categories.router')

function routerApi(app) {
  app.use('/products', productsRouter)
  app.use('/users', usersRouter)
  app.use('/categories', categorieRouter)
}

module.exports = routerApi;
