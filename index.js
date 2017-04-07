var express    = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
var Lazy = require('lazy.ai')


// Init ..
var lazy = new Lazy();

app.get('/', function (req, res) {
  res.json({status:true, response:'Enjoy your own open-source ai chatbot powered lazy.ai.!'})
})

app.get('/categories', function (req, res) {
  lazy.getCategories()
    .then((categories) => {
      res.status(200).json({ response:categories })
    })
    .catch((err) => {
      res.status(404).json({ response:err })
    })
})

app.post('/learn', function (req, res) {
  if (!req.body.category || !req.body.phrase) {
    res.status(404).json({ response:'Check usage.' })
  } else {
    lazy.learn({phrase: req.body.phrase, category: req.body.category})
      .then(() => {
        res.status(200).json({ response:req.body })
      })
      .catch((err) => {
        res.status(404).json({ response:err })
      })
  }
})

app.post('/forget', function (req, res) {
  if (!req.body.category || !req.body.phrase) {
    res.status(404).json({ response:'Check usage.' })
  } else {
    lazy.removeDocument({phrase: req.body.phrase, category: req.body.category})
      .then(() => {
        res.status(200).json({ response:req.body })
      })
      .catch((err) => {
        res.status(404).json({ response:err })
      })
  }
})

app.post('/response', function (req, res) {
  if (!req.body.response || !req.body.category) {
    res.status(404).json({ response:'Check usage.' })
  } else {
    lazy.addResponse({response: req.body.response, category: req.body.category})
      .then(() => {
        res.status(200).json({ response:req.body })
      })
      .catch((err) => {
         res.status(404).json({ response:err })
      })
  }
})

app.post('/query', function (req, res) {
  if (!req.body.phrase) {
    res.status(404).json({ response:'Check usage.' })
  } else {
    lazy.query({phrase: req.body.phrase})
      .then((response) => {
        res.status(200).json({ response })
      })
      .catch((err) => {
         res.status(404).json({ response:err })
      })
  }
})

app.get('/save', function (req, res) {
  lazy.save();
  res.json({status:true});
})

app.get('/quiet', function (req, res) {
  lazy.quiet();
  res.json({status:true})
})

app.get('/load', function (req, res) {
  lazy.loadTrainedData();
  res.json({status:true})
})

app.get('/responses/:category', function (req, res) {
  lazy.getResponses({category: req.params.category})
    .then((responses) => {
      res.status(200).json({ response:categories })
    })
    .catch((err) => {
      res.status(404).json({ response:err })
    })
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Lazy.express listening..!')
})
