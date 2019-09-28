var express = require('express');
var router = express.Router();

var localizeOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

var title = 'On Kawara font';

/* GET home page. */
router.get('/', function(req, res, next) {
  const today = (new Date()).toLocaleDateString('en-US', localizeOptions).replace(/ /g, '');

  const responseData = {
    title,
    date: today,
    theme: res.locals.theme,
    fontVersion: req.app.get('font-version')
  };

  res.render('index', responseData);
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title: `${title} about`,
    fontVersion: req.app.get('font-version')
  });
});

router.get('/download', function(req, res, next) {
  res.render('download', {
    title: `${title} download`,
    fontVersion: req.app.get('font-version')
  });
});

module.exports = router;
