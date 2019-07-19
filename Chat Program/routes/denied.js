var express = require('express');
var router = express.Router();

/* GET access denied page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ACCESS DENIED' });
});

module.exports = router;
