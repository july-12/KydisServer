const { Post, Category, Comment } = require('../models')

module.exports = {
  create: async function (req, res) {
    try {
      let { title, content, category_id } = req.body
      await Post.create({ title, content })
      res.status(200).send({ msg: 'create post successfully'})
    }catch(error) {
      res.status(400).send(error)
    }
  },
  getAll: async function(req, res) {
    try {
      let posts = await Post.findAll()
      res.status(200).json(posts)
    } catch(error) {
      res.status(400).send(error)
    }

  },
  get: async function(req, res) {
    try {
      let id = +req.params.id
      let post = await Post.findById(id, { include: [ { model: Category, as: 'category'}, { model: Comment, as: 'comments' } ]})
      res.status(200).json(post)
    } catch(error) {
      res.status(400).send(error)
    }
  },
  update: async function(req, res) {
    try {
      let id = +req.params.id
      let post = await Post.findById(id)
      await post.update({ ...req.body })
      res.status(200).send({ msg: 'update post successfully!'})
    } catch(error) {
      res.status(400).send(error)
    }
  },
  destroy: async function(req, res) {
    try {
      let id = +req.params.id
      let post = await Post.findById(id)
      await post.destroy()
      res.status(200).send({ msg: 'delete post successfully!'})
    } catch(error) {
      res.status(400).send(error)
    }
  },
  createComment: async function(req, res) {
    try {
      let id = +req.params.id
      let { content } = req.body
      let post = await Post.findById(id)
      await post.createComment({ content })
      res.status(200).send({ msg: 'create comment successfully!'})
    } catch(error) {
      res.status(400).send(error)
    }
  },
}
