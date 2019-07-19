var express = require('express');
var router = express.Router();

var fs = require('fs');

// GET Dashboard page.
// Need to check if user is logged in before rendering page
router.get('/', function(req, res, next) {
    // You would usually generate this during login & store it locally
    // You'd then check it's value now then show the dashboard if correct
    // or show some other page if incorrect
    console.log(req.cookies);
    let stored_sessionid = 'secretrandomstring'
    if(req.cookies.sessionid)
    {
        var supplied_sessionid = req.cookies.sessionid;
        console.log(supplied_sessionid);
        if(supplied_sessionid === stored_sessionid)
        {
            // Save some user data to the filesystem - just to show how we can
            let rawdata = fs.readFileSync('data/user.json');
            let userdata = JSON.parse(rawdata);
            console.log(userdata);

            // Draw the dashboard because the user is logged in
            res.render('dashboard', { title: 'Dashboard', user:userdata });
        }
        else
        {
            res.redirect('denied');
        }
    }
    else
    {
        res.redirect('denied');
    }
});

function myclick(){
    var myLink = document.getElementById('mylink');
    myLink.onclick = function(){
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "./Chat/app.js"; 
            document.getElementsByTagName("head")[0].appendChild(script);
            return false;
    }
    document.getElementById('mylink').click();
}



module.exports = router;
