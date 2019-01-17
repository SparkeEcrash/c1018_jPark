const router = require('express').Router();

// Models
const {User} = require('./../models/user');

// Middlewares
const { auth } = require('./../middleware/auth');

router.post('/api/user/register', (req, res) => {
  const user = new User(req.body);
  user.save((err,doc) => {
    if(err) return res.json({success: false, err});
    res.status(200).json({
      success: true
    })
  })
})

router.post('/api/user/login', (req,res) => {
  User.findOne({'email':req.body.email}, (err, user)=> {
    if(!user) return res.json({loginSuccess:false, message: 'Email is not registered'});
    user.comparePassword(req.body.password, (err, isMatch)=> {
      if(!isMatch) return res.json({loginSuccess:false, message: 'Wrong Password'})
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err);
        res.cookie('ga_auth', user.token).status(200).json({
          loginSuccess: true
        })
      })
    })
  })
})

router.get('/api/user/auth', auth, (req,res) => {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false: true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    cart: req.user.cart,
    history: req.user.history
  })
})

router.get('/api/user/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    {_id: req.user._id},
    {token: ''},
    (err, doc) => {
      if(err) return res.json({success: false, err});
      return res.status(200).send({
        success: true
      })
    }
  )
})

module.exports = router;