var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["Bob","Tina"],
	add: function(x,y){
		return x + y;
	}

}

function speak(){
	return "WOOF";

}

var dog = {};
var cat = {};

var comments = {};
comments.data = ["GOOD JOB!", "BYE", "LAME..."]

function print(arr){
	arr.forEach(function(el){
		console.log(el);
	})
}

comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
}