var express = require('express')
var router = express.Router()

const { Post } = require('../../../models')

router.post('/posts', function(req, res) {
  let { title, content } = req.body
   Post.create({ title, content })
        .then(function (data) {
          res.status(200).send({ msg: 'create post successfully'})
        })
        .catch(function (error) {
          console.log('ERROR:', error)
        })
})
router.get('/posts', function(req, res) {
    // db.any('SELECT * FROM posts')
    Post.findAll()
        .then(function (data) {
          res.status(200).json(data)
        })
        .catch(function (error) {
          console.log('ERROR:', error)
        })

})
router.get('/posts/:id', function(req, res) {
  let id = +req.params.id
    // db.one(`SELECT * FROM posts where id = ${id}`)
    // Post.findById(id)
    Post.find({ where: { id: id }})
        .then(function (data) {
          res.status(200).json(data)
        })
        .catch(function (error) {
          console.log('ERROR:', error)
        })
})

module.exports = router
