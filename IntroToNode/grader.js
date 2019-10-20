function average(grades){
    var sum = 0;
    for (var i = 0; i < grades.length;i++){
        sum += grades[i];
    }

    //grades.forEach(function(score)){
     //   sum += score.length;
    //}

    avg = sum / grades.length
    console.log(Math.round(avg))
}

var scores =[90, 98, 89, 100, 100, 86, 94];
average(scores); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); //should return 68