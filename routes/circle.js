var express = require('express')
var router = express.Router()
var circ = require("../model/circle")

router.post('/', function(req,res,next){
    var resText = "";
    let r = parseFloat(req.body.r)
    if(r> 0){
        resText = "The Area of the Circle is "+circ.area(r)+"<br>";
        resText +="The perimeter of the Circle is "+circ.perimeter(r); 
    }else{
        resText = "Circle Radius should be greater then 0"
    }
    res.send(resText)
});

module.exports = router