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
  let order = req.body.order ? req.body.order: 'asc';
  let sortBy = req.body.sortBy ? req.body.sortBy : "name";
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
  if(req.body.product_id) {
    Amiibo.findOneAndUpdate(
      { _id: req.body.product_id }, 
      { $set: req.body.dataToSubmit },
      { new: true }
    ).then(amiibo => res.json({success: true, article: amiibo}));
  } else {
    const amiibo = new Amiibo(req.body);
    amiibo.save((err, doc) => {
      if(err) return res.json({success:false, err});
      res.status(200).json({
        success: true,
        article: doc
      })
    })
  } 
})

router.delete('/api/product/article', auth, admin, (req, res)=> {
  Amiibo.findById(req.body.id)
    .then(amiibo => {
      amiibo.remove().then(() => res.json({ success: true }));
    })
    .catch(err => {
      res.status(404).json({ success: false, err})
    });
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

router.delete('/api/product/series', auth, admin, (req, res)=> {
  Amiibo.
  find({ 'series': req.body.id }).
  exec((err,docs) => {
    if(err) return res.status(400).send(err);
    if (docs.length) {
        res.status(200).json({success: false, series: req.body.series, existing: true})
    } else {
      Series.findById(req.body.id)
        .then(series => {
          series.remove().then(() => Series.find({}, (err, series) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({
              success: true,
              series: series,
              existing: false
            })
          }))
        })
        .catch(err => {
          res.status(404).json({success: false, err})
        })
    }
  })
})

router.get('/api/product/series', (req, res)=> {
  Series.
    find({}).
    sort('name').
    exec((err, series) => {
      if(err) return res.status(400).send(err);
      res.status(200).send(series);
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

router.delete('/api/product/wave', auth, admin, (req, res)=> {
  Amiibo.
  find({ 'wave': req.body.id }).
  exec((err,docs) => {
    if(err) return res.status(400).send(err);
    if (docs.length) {
        res.status(200).json({success: false, waves: req.body.waves, existing: true})
    } else {
      Wave.findById(req.body.id)
        .then(wave => {
          wave.remove().then(() => Wave.find({}, (err, waves) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({
              success: true,
              waves: waves,
              existing: false
            })
          }))
        })
        .catch(err => {
          res.status(404).json({success: false, err})
        })
    }
  })
})

router.get('/api/product/waves', (req, res) => {
  Wave.find({}, (err, waves)=>{
    if(err) return res.status(400).send(err);
    res.status(200).send(waves)
  })
})

module.exports = router;