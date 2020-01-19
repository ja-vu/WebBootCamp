var bodyParser  = require ("body-parser"),
mongoose        = require("mongoose"),
express         = require("express"),
app             = express();

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser:true})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

//title
//image
//body
//created

app.listen(3000, function(){
    console.log("RESTful Blog has started on Port 3000")
});