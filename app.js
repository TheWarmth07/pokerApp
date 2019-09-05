var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req,res){
   res.render("home");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The server has started!");
});