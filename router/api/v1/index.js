var express = require('express')
var router = express.Router()

const { postsController, categoriesController } = require('../../../controllers/index.js')

router.post('/posts', postsController.create)
router.get('/posts', postsController.getAll)
router.get('/posts/:id', postsController.get)
router.put('/posts/:id', postsController.update)
router.delete('/posts/:id', postsController.destroy)

//create comment
router.post('/posts/:id/comments', postsController.createComment)

router.get('/categories', categoriesController.getAll)
router.post('/categories', categoriesController.create)

module.exports = router
