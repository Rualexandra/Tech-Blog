const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// User signup
router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.error('Signup error:', err); // Detailed logging
    res.status(500).json(err);
  }
});

module.exports = router;
