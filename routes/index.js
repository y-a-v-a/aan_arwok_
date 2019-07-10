var express = require('express');
var router = express.Router();

var localizeOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

var title = 'On Kawara font';

function getTheme() {
  var options = [
    'white-on-gray',
    'white-on-red',
    'white-on-greenish'
  ];

  var randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var today = (new Date()).toLocaleDateString('en-US', localizeOptions);
  var theme = getTheme();

  const responseData = {
    title: title,
    date: today,
    theme: theme
  };

  res.render('index', responseData);
});

router.get('/about', function(req, res, next) {
  var theme = getTheme();
  res.render('about', {
    title: `${title} about`,
    theme: theme
  });
});

router.get('/download', function(req, res, next) {
  var theme = getTheme();
  res.render('download', {
    title: `${title} download`,
    theme: theme
  });
});


module.exports = router;


// on kawara
// aaaknorw
