var express = require('express');
var router = express.Router();
var tri = require('../model/triangle');

router.post('/',function(req,res,next){
    var resText = ""
    let s1 = parseFloat(req.body.s1)
    let s2 = parseFloat(req.body.s2)
    let s3 = parseFloat(req.body.s3)
    if (s1 >= 0 && s2 >= 0 && s3 >= 0) {
        resText = "The Area of the Triangle is "+tri.area(s1,s2,s3)+"<br>";
        resText +="The perimeter of the Triangle is "+tri.perimeter(s1,s2,s3);
    } else {
        resText = "Triangle side should be greater then zero : s1 = "+s1+" , s2 = "+s2+"and s3 = "+s3;
    }
    res.send(resText)
});
module.exports = router