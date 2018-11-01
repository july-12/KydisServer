const { Category } = require('../models')

module.exports = {
  create: async function (req, res) {
    try {
      let { name } = req.body
      await Category.create({ name })
      res.status(200).send({ msg: 'create category successfully'})
    }catch(error) {
      res.status(400).send(error)
    }
  },
  getAll: async function (req, res) {
    try {
      let categories = await Category.findAll()
      res.status(200).json(categories)
    }catch(error) {
      res.status(400).send(error)
    }
  }
}
