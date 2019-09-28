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
  const fontVersionValue = req.app.get('font-version');
  const fontVersion = `-${fontVersionValue}`;

  const responseData = {
    title,
    date: today,
    theme: res.locals.theme,
    fontVersion
  };

  res.render('index', responseData);
});

router.get('/about', function(req, res, next) {
  const fontVersionValue = req.app.get('font-version');
  const fontVersion = `-${fontVersionValue}`;

  res.render('about', {
    title: `${title} about`,
    fontVersion
  });
});

router.get('/download', function(req, res, next) {
  const fontVersionValue = req.app.get('font-version');
  const fontVersion = `-${fontVersionValue}`;

  res.render('download', {
    title: `${title} download`,
    fontVersion
  });
});

module.exports = router;
