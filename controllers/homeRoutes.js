const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Render homepage with existing posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Render dashboard with user posts
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render new post page
router.get('/new-post', withAuth, (req, res) => {
  res.render('new-post', { logged_in: req.session.logged_in });
});

// Render edit post page
router.get('/edit-post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true });
    res.render('edit-post', { post, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
