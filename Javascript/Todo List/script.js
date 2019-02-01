var todos=["buy new turtle"]; //empty array

var input = prompt("What would you like to do?");


window.setTimeout(function() {
	while(input !=="quit"){

	//handle input
	if(input ==="list"){
		listToDos()
	} 

	else if(input ==="new"){
		addTodo();

	} else if (input === "delete"){
		deleteTodo();
	}

	//ask again for new input
	input = prompt("What would you like to do?");

	}

	console.log("OK, YOU QUIT THE APP");


function listToDos(){
	console.log("**********");
	todos.forEach(function(todo, j)
	{
		console.log(j + ": " + todo)
	});
	console.log("**********")
}

function addTodo(){
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	// add to todos array
	todos.push(newTodo);
	console.log("Added Todo")
}

function deleteTodo(){
	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete");

	// delete that todo

	//splice()
	todos.splice(index,1); //delete 1 entry after "index"
	console.log("Deleted Todo");
}
}, 500);