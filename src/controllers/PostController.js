'use strict';

const Post = require(__MODELS + 'Post');

module.exports = {
  async store (req, res){
    try {
      const post = await Post.create(req.body);
      return res.json(post);
    }
    catch(error){
      console.log('Error on creating POST =====>', error);
      return res.status(400).json({ message: error })
    }
  },
  async index (req, res){
    res.json({ ok: true });
  }
}