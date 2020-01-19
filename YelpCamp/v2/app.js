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
    name: String,
    image: String,
    description: String
})

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {name:"Granite Hill", 
//     image:"https://source.unsplash.com/eDgUyGu93Yw",
//     description: "This is a huge grantite hill, no bathrooms. No water. Beautiful granite!"


// },function(err,campground){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("NEWLY CREATED CAMPGROUND: ")
//         console.log(campground);
//     }
// })

app.get("/", function(req,res){
    res.render("landing")
});

//INDEX - Show all Campgrounds
app.get("/campgrounds", function(req,res){
    // Get all campgrounds from DB
    Campground.find({}, function(err,allCampgrounds){
        if(err){
            console.log(err)
        } else {
            res.render("index", {campgrounds:allCampgrounds});
        }
    })
});

//CREATE - Add new campgrounds to DB
app.post("/campgrounds", function(req,res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description
    var newCampground = {name:name, image:image, description:desc}
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

//NEW - Show form to create new campground
app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});

//SHOW - Shows info about one specific campground
app.get("/campgrounds/:id", function(req,res){
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err)
        }
        else {
            //render show template with that campground
            res.render("show", {campground: foundCampground})
        }
    });


})

app.listen(3000, function(){
    console.log("YelpCamp has started on Port 3000")
});