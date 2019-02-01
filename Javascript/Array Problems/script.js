var firstArray = [1, 2, 3, 5];
var a;
var sum = 0;

printReverse(firstArray);
isUniform(firstArray);
sumArray();


//*** printReverse() ***

function printReverse(arr){
	for(var i = arr.length - 1; i >= 0 ; i--){
		console.log(arr[i])
	}
}

//*** isUniform() ***

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i< arr.length; i++){
		if(arr[i] != first){
			return false
		}
	}
return true;

}

//*** sumArray() ***

function sumArray(){

console.log("The sum of the array is: ")
for(var i = 0; i < firstArray.length ; i++){
	sum += firstArray[i]
}

console.log(sum)

}

// var total = 0;
// arr.forEach(function(element){
// 	total += element;
// });
// return total;
// }

// *** max() ***

function max(arr){
	var currentMax = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i]>currentMax){
			currentMax=arr[i];
		}
	}
	return currentMax;
}