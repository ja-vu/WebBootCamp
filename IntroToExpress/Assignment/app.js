var express = require("express");
var app = express()


app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!")
});


app.get("/speak/:animal", function(req,res){
    var sounds = {
        pig: "Oink",
        dog: "Woof Woof!",
        cow: "Moo",
        cat: "Meow",
        goldfish: "..."
    }
    
    var animal = req.params.animal;
    var sound = sounds[animal]
    
    res.send("The " + animal + " says " + sound)

});

app.get("/repeat/:string/:num",function(req,res){
    //console.log(req.params.num);
    var str = ""
    for (var i =0; i< req.params.num;i++)
    {
        str += req.params.string + " ";
    }

    res.send(str);
    });

app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?")
})

// PORT NUMBER
app.listen(3000,function(){
    console.log("SERVER LISTENING ON PORT 3000...")
});