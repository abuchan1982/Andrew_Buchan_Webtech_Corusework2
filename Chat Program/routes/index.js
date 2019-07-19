var express = require('express');
var router = express.Router();

/* GET home/index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web Chat', content: 'A simple multi-user Chat App' });
});

module.exports = router;
