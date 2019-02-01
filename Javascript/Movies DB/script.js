var listMovies = [
	{
	title: "Avengers: Infinity War",
	rating: "5 stars",
	hasWatched: true
	},

	{
	title: "Antman and the Wasp",
	rating: "4 stars",
	hasWatched: false
	},

	{
	title: "Deadpool 2",
	rating: "5 stars",
	hasWatched: false
	},
	{
	title: "Black Panther",
	hasWatched: true,
	rating: "3.5 stars"
	}
];

listMovies.forEach(function(movie){
console.log(buildString(movie))
});

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else{
		result += "not seen ";
	}
	result += "\""+ movie.title + "\" - ";
	result += movie.rating + " stars"
	return result;
}