const sequelizeDb = require('../../models')
const Contrato = sequelizeDb.Contrato

exports.create = (req, res) => {
  Contrato.bulkCreate(req.body).then(async data => {
    res.status(200).send(data)
  }).catch(err => {
    console.log(err)
    if (err.errors) {
      res.status(422).send({
        message: err.errors
      })
    } else {
      res.status(500).send({
        message: 'Algún error ha surgido al insertar el dato.'
      })
    }
  })
}
