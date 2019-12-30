// Create a function that will take the array and a student id (any number you want) as parameters. 
// Use map to create a new array that stores each score in an object that includes the activity ID 
// (first score is 0, second score 1, etc.) as well as the student ID. 
const array = [10, 0, 90, 80, 50, 0, 60];
let studentArray = function(arr, id) {
    return array.map((el, idx) => {
        return {
                    studentID: id,
                    activityID: idx,
                    score: el
                };                        
    })
}

//Create a function that will create a new array with the lowest score removed. 
// (For this exercise if both 0s are removed that is OK.)
let removeLowestScore = function(array) {
    let lowestScore = Math.min(...array);
   return newArray = array.filter(val => val !== lowestScore);
}

//Create a function that will Sum the scores.
let scoresSum = function(array) {
    return array.reduce((acc, curr) => acc + curr );
}

//Create a function that will compute the average from an array passed in.
let avgArray = function(array) {
    let len = array.length;
    return array.reduce((acc, curr) => acc + curr)/len;
}

//Create a function that will create a new array of score objects that have a 0 score.
let zeroArray = function(array) {
    return array.filter(e => e === 0);
}
//Using the functions you have created, generate a new array with full data. 
//Compute the average once the lowest score has been removed. And create an array of zero scores with the full data 
//that could be provided to the learner.

let studentObj = studentArray(array, 1);
let lowScoreRemoved = removeLowestScore(studentObj);




