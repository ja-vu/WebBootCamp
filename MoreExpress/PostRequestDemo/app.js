var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var friends = [
    "Tony",
    "Miranda",
    "Pierre",
    "Lily",
    "Justin"
];

app.get("/", function(req,res){
    res.render("home");
});

//POST ROUTE is to ADD data to be added
app.post("/addfriend", function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req,res){
   
    res.render("friends", {friends:friends});
})

app.listen(3000,function(res,req){
    console.log("LISTENING ON PORT 3000")
});