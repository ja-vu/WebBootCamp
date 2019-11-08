var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs")

var campgrounds = [
    {name:"Salmon Creek", image:"https://source.unsplash.com/8f_VQ3EFbTg"},
    {name:"Granite Hill", image:"https://source.unsplash.com/eDgUyGu93Yw"},
    {name:"Mountain Goat's Rest", image:"https://source.unsplash.com/pSaEMIiUO84"},
    {name:"Salmon Creek", image:"https://source.unsplash.com/8f_VQ3EFbTg"},
    {name:"Granite Hill", image:"https://source.unsplash.com/eDgUyGu93Yw"},
    {name:"Mountain Goat's Rest", image:"https://source.unsplash.com/pSaEMIiUO84"}
];

app.get("/", function(req,res){
    res.render("landing")
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image}
    campgrounds.push(newCampground)
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});


app.listen(3000, function(){
    console.log("YelpCamp has started on Port 3000")
});