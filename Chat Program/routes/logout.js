var express = require('express');
const fs = require('fs');
var router = express.Router();



/* GET logout page */
router.get('/', function(req, res, next) {
    console.log(req.cookies);
    res.cookie('sessionid', 'badid');
    console.log(req.cookies);
    res.render('logout', { title: 'You are now logged out' });
});

module.exports = router;
