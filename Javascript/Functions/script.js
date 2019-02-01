//isEven
// function isEven(x)
// {
// 	if(x%2===0){
// 		console.log("Even")
// 		return true;
// 	}

// 	else{
// 		console.log("Odd")
// 		return false
// 	}
// }

function isEven(x){
	return num % 2 === 0;
}

// Write Factorial

function factorial(x){
	j = 1;
	for(i = 1; i <= x ; i++){
		j = j * i;
	}
	return j;

	//j *= i
}

//Write kebabToSnake()

function kebabToSnake(str){
	if(typeof str ==="number"){
		return "That's not a string!"

	}
	return str.replace(/-/g,"_");

}