console.log("PRINT ALL NUMBERS BETWEEN -10 and 19")
var count = -10;
while(count<20){
	console.log(count)
	count++
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 and 40")
var evenNum=10;
while(evenNum<=40){
	if(evenNum%2===0){
		console.log(evenNum);
	}
	evenNum++;
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 and 333")
var oddNum=300;
while(oddNum<=333){
	if(oddNum%2===1){
		console.log(oddNum);
	}
	oddNum++;
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50")
var numNum = 5;
while(numNum<=50){
	if(numNum%3===0 && numNum%5===0){
		console.log(numNum);
	}

	numNum++;
}