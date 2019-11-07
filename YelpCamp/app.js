var express = require("express");
var app = express();

app.set("view engine","ejs")

app.get("/", function(req,res){
    res.render("landing")
});

app.get("/campgrounds", function(req,res){
    var campgrounds = [
        {name:"Salmon Creek", image:"https://source.unsplash.com/8f_VQ3EFbTg"},
        {name:"Granite Hill", image:"https://source.unsplash.com/eDgUyGu93Yw"},
        {name:"Mountain Goat's Rest", image:"https://source.unsplash.com/pSaEMIiUO84"}
    ]

    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function(){
    console.log("YelpCamp has started on Port 3000")
});