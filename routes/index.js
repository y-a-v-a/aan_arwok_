var express = require('express');
var router = express.Router();

var localizeOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

var today = (new Date()).toLocaleDateString('en-US', localizeOptions);
var title = 'On Kawara font';

/* GET home page. */
router.get('/', function(req, res, next) {
  const responseData = {
    title: title,
    date: today
  };

  res.render('index', responseData);
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: `${title} about` });
});

router.get('/download', function(req, res, next) {
  res.render('download', { title: `${title} download` });
});


module.exports = router;
