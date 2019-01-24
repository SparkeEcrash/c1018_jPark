const router = require('express').Router();

// Models
const { Amiibo } = require('./../models/amiibo');
const { Series } = require('./../models/series');
const { Wave } = require('./../models/wave');

// Middlewares
const { auth } = require('./../middleware/auth');
const { admin } = require('./../middleware/admin');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);


/**
|--------------------------------------------------
| PRODUCTS
|--------------------------------------------------
*/
router.post('/api/product/shop',(req,res) => {
  let order = req.body.order ? req.body.order: 'desc';
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  let findArgs = {};

  for(let key in req.body.filters) {
    if(req.body.filters[key].length > 0) {
      if(key === 'price') {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1]
        }
      } else {
        findArgs[key] = req.body.filters[key]
      }
    }
  }

  findArgs['publish'] = true;

  Amiibo.
    find(findArgs).
    populate('series').
    populate('wave').
    sort([[sortBy, order]]).
    skip(skip).
    limit(limit).
    exec((err, articles)=> {
      if(err) return res.status(400).send(err);
      res.status(200).json({
        size: articles.length,
        articles
      })
    })
})

router.get('/api/product/articles', (req, res)=> {
  let order = req.query.order ? req.query.order: 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit): 100;
  
  Amiibo.
  find().populate('series').
  populate('series').
  populate('wave').
  sort([[sortBy, order]]).
  limit(limit).
  exec((err, articles)=>{
    if(err) return res.status(400).send(err);
    res.send(articles)
  })
})

router.get('/api/product/articles_by_id', (req, res)=> {
  let type = req.query.type;
  let items = req.query.id;

  if(type === "array") {
    let ids = req.query.id.split(',');
    items = [];
    items = ids.map(item=>{
      return mongoose.Types.ObjectId(item)
    })
  }
  Amiibo.
  find({ '_id': {$in:items}}).
  populate('series').
  populate('wave').
  exec((err,docs) => {
    return res.status(200).send(docs)
  })

})

router.post('/api/product/article', auth, admin, (req, res)=> {
  const amiibo = new Amiibo(req.body);
  amiibo.save((err, doc)=> {
    if(err) return res.json({success:false, err});
    res.status(200).json({
      success: true,
      article: doc
    })
  })
})

/**
|--------------------------------------------------
| SERIES
|--------------------------------------------------
*/
router.post('/api/product/series', auth, admin, (req, res)=>{
  const series = new Series(req.body);
  series.save((err, doc)=> {
    if(err) return res.json({success:false, err});
    res.status(200).json({
      success: true,
      series: doc
    })
  })
})

router.get('/api/product/series', (req, res)=> {
  Series.find({},(err, series)=>{
    if(err) return res.status(400).send(err);
    res.status(200).send(series)
  })
})

/**
|--------------------------------------------------
| WAVES
|--------------------------------------------------
*/
router.post('/api/product/wave', auth, admin, (req, res) => {
  const wave = new Wave(req.body);
  wave.save((err, doc) => {
    if(err) return res.json({success:false, err});
    res.status(200).json({
      success: true,
      wave: doc
    })
  })
});

router.get('/api/product/waves', (req, res) => {
  Wave.find({}, (err, waves)=>{
    if(err) return res.status(400).send(err);
    res.status(200).send(waves)
  })
})

module.exports = router;