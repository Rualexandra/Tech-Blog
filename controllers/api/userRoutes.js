const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// User signup
router.post('/signup', async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log request body
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log('Hashed Password:', hashedPassword); // Log hashed password

    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.error('Signup error:', err); // Log detailed error
    res.status(500).json({ message: 'Internal Server Error', error: err });
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
