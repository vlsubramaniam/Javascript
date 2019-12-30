//The processData function has several data structures being passed to it. Check to see if the data is an Array. 
// If not convert it to an array and then return an array of those arrays. To check the returned value you can display the
// allArray variable.
let newArr = [];
let processData = function() {
    for (let arr of arguments) {
        if (!Array.isArray(arr)) {
            newArr.push(Array.from(arr));
        } else {
            newArr.push(arr);
        }
    }
    console.log(Array.isArray(newArr));
    return newArr;

};
