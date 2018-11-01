var express = require('express')
var router = express.Router()

var pgp = require('pg-promise')()
var db = pgp('postgres://yubtan@localhost:5432/kydis')

router.get('/posts', function(req, res) {
    db.any('SELECT * FROM posts')
        .then(function (data) {
          res.status(200).json(data)
        })
        .catch(function (error) {
          console.log('ERROR:', error)
        })

})
router.get('/posts/:id', function(req, res) {
  let id = +req.params.id
    db.one(`SELECT * FROM posts where id = ${id}`)
        .then(function (data) {
          res.status(200).json(data)
        })
        .catch(function (error) {
          console.log('ERROR:', error)
        })
})

module.exports = router
