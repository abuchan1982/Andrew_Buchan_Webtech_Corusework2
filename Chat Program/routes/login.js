var express = require('express');
const fs = require('fs');
var router = express.Router();



/* GET login page */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* POST Login page */
router.post('/', function(req, res, next) {
    console.log(req.body);
    writer = fs.createWriteStream('data/user.json');
    writer.write(JSON.stringify(req.body));
    
    res.cookie('sessionid', 'secretrandomstring');
    res.redirect('/dashboard');
});

module.exports = router;
