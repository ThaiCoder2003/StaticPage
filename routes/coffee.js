var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('coffee/coffee', { title: 'Coffee' });
});

module.exports = router;
