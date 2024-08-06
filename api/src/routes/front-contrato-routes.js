module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/front/contrato-controller.js')

  router.post('/', controller.create)

  app.use('/api/front/contratos', router)
}
