//Immediately invoke all three functions.
//Create a function that adds two numbers and assign it to a variable
let addTwoNumbers = function(num1, num2) {
    return num1 + num2;
}(4, 5);


//Create a function that multiplies the previous number by itself and store it in a second variable.
let square = function(add) {
    return addTwoNumbers * addTwoNumbers;
}();


//Create a function that prints to the console the variable that contains the results of the previous function.
let showResult = function() {
    console.log(square);
}();

