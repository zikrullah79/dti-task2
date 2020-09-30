var express = require('express');
var router = express.Router();
var rect = require("../model/rectangle")
/* GET home page. */
router.post('/', function(req, res, next) {
    var resText = ""
    let l = parseFloat(req.body.l)
    let p =parseFloat(req.body.p)
    if(l<=0 || p<=0){
        resText = "Rectangle Dimensions should be greater then zero : l = "+l+" and p = "+p;
    }else{
        resText = "The Area of the Rectangle is "+rect.area(l,p)+"<br>";
        resText +="The perimeter of the Rectangle is "+rect.perimeter(l,p);
    }
    res.send(resText);
});

module.exports = router;
