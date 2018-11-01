var express = require('express')
var router = express.Router()

const { postsController } = require('../../../controllers/index.js')

router.post('/posts', postsController.create)
router.get('/posts', postsController.getAll)
router.get('/posts/:id', postsController.get)
router.put('/posts/:id', postsController.update)
router.delete('/posts/:id', postsController.destroy)

module.exports = router
