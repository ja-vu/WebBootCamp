var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser:true})
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs")

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name:String,
    image:String
})

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {name:"Granite Hill", 
//     image:"https://source.unsplash.com/eDgUyGu93Yw"


// },function(err,campground){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("NEWLY CREATED CAMPGROUND: ")
//         console.log(campground);
//     }
// })


// var campgrounds = [
//     {name:"Salmon Creek", image:"https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
//     {name:"Granite Hill", image:"https://source.unsplash.com/eDgUyGu93Yw"},
//     {name:"Mountain Goat's Rest", image:"https://source.unsplash.com/pSaEMIiUO84"},
//     {name:"Sandy Cheeks", image:"https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
//     {name:"Hilly Taggins", image:"https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
//     {name:"Tahiti Replica", image:"https://images.unsplash.com/photo-1466220549276-aef9ce186540?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
// ];

app.get("/", function(req,res){
    res.render("landing")
});

app.get("/campgrounds", function(req,res){
    // Get all campgrounds from DB
    Campground.find({}, function(err,allCampgrounds){
        if(err){
            console.log(err)
        } else {
            res.render("campgrounds", {campgrounds:allCampgrounds});
        }
    })
});

app.post("/campgrounds", function(req,res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image}
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err)
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    })
});

app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});


app.listen(3000, function(){
    console.log("YelpCamp has started on Port 3000")
});