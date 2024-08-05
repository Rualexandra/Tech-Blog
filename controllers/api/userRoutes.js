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
    console.error('Signup error:', err); // Add error logging
    res.status(500).json(err);
  }
});
// User logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  

module.exports = router;
