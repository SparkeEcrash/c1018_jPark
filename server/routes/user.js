const router = require('express').Router();
const formidable = require('express-formidable');
const cloudinary = require('cloudinary');

// Models
const {User} = require('./../models/user');
const {Amiibo} = require('./../models/amiibo');
const { Payment } = require('./../models/payment');

// Middlewares
const { auth } = require('./../middleware/auth');
const { admin } = require('./../middleware/admin');

require('dotenv').config();

const async = require('async');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

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

router.post('/api/user/update_profile', auth, (req, res)=>{
  //req.user is from auth.js
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      "$set": req.body
    },
    { new: true },
    (err, doc) => {
      if(err) return res.json({success: false, err});
      return res.status(200).send({
        response: {success: true},
        data: req.body
      })
    }
  )
})

router.post('/api/user/uploadimage', auth, admin, formidable(), (req, res)=> {
  cloudinary.uploader.upload(req.files.file.path, (result) => {
    res.status(200).send({
      public_id: result.public_id,
      url: result.url
    })
  }, {
    public_id: `${Date.now()}`,
    // public_id: `gityo_amiibo/${Date.now()}`,
    overwrite: true,
    resource_type: 'auto'
  })
})

router.get('/api/user/removeimage', auth, admin, (req, res)=> {
  let image_id = req.query.public_id;
  cloudinary.uploader.destroy(image_id, (error, result)=> {
    if(error) return res.json({success: false, error});
    res.status(200).send('ok');
  })
})

router.post('/api/user/addToCart',auth,(req,res)=>{
  User.findOne({_id: req.user._id},(err,doc)=>{
    let duplicate = false;
    doc.cart.forEach((item) => {
      if(item.id == req.query.productId){
        duplicate=true;
      }
    })
    if(duplicate) {
      User.findOneAndUpdate(
        {_id: req.user._id, "cart.id":mongoose.Types.ObjectId(req.query.productId)},
        {$inc: {"cart.$.quantity":1}},
        {new: true},
        () => {
          if(err) return res.json({success:false,err});
          res.status(200).json(doc.cart)
        }
      )
    } else {
      User.findOneAndUpdate(
        {_id: req.user._id},
        { $push:{ cart: {
          id: mongoose.Types.ObjectId(req.query.productId),
          quantity:1,
          date: Date.now()
        }}},
        {new: true},
        (err,doc)=> {
          if(err) return res.json({success:false,err})
          res.status(200).json(doc.cart)
        }
      )
    }
  })
})

router.post('/api/user/successBuy', auth, (req, res)=>{
  let history = [];
  let transactionData = {}

  req.body.cartDetail.forEach((item)=>{
    history.push({
      dateOfPurchase: Date.now(),
      name: item.name,
      series: item.series.name,
      id: item._id,
      price: item.price,
      quantity: item.quantity,
      paymentId: req.body.paymentData.paymentID
    })
  })

  transactionData.user = {
    id: req.user._id,
    name: req.user.name,
    lastname: req.user.lastname,
    email: req.user.email
  }

  transactionData.data = req.body.paymentData;
  transactionData.product = history;

  User.findOneAndUpdate(
    { _id: req.user._id },
    { $push:{ history: history}, $set:{ cart:[] }},
    { new: true },
    (err, user) => {
      if(err) return res.json({success:false, err});

      const payment = new Payment(transactionData);
      payment.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        let products = [];
        doc.product.forEach(item=>{
          products.push({id:item.id, quantity: item.quantity})
        })

        async.eachSeries(products,(item,callback) =>{
          Amiibo.update(
            {_id: item.id},
            { $inc: {
              "sold": item.quantity
            }},
            {new: false},
            callback
          )
        },(err)=>{ 
          if(err) return res.json({success:false, err})
          res.status(200).json({
            success: true,
            cart: user.cart,
            cartDetail: []
          })
        })

      });
    }
  )
})

router.get('/api/user/removeFromCart',auth,(req,res)=>{
  User.findOneAndUpdate(
    {_id: req.user._id },
    { "$pull":
      {"cart":{"id":mongoose.Types.ObjectId(req.query._id)}}
    },
    { new: true },
    (err, doc)=>{
      let cart = doc.cart;
      let array = cart.map(item=>{
        return mongoose.Types.ObjectId(item.id)
      });
      Amiibo.
      find({'_id':{ $in: array}}).
      populate('series').
      populate('wave').
      exec((err,cartDetail) => {
        return res.status(200).json({
          cartDetail,
          cart
        })
      })
    }
  )
})

module.exports = router;