//Use one of the Array methods to count the number of 0s in this list of scores.

// let scores = [80, 50, 0, 100, 90, 80, 75, 0, 0, 5, 65, 93];

// let zeroforEach = 0;
// scores.forEach((val) => (val === 0) ? zeroforEach++: 0);

// // let zeroreduce = scores.reduce(function(acc, val){
// //  return (val === 0) ? acc + 1 : acc;
// // }, 0)

// let zeroreduce = scores.reduce((acc, val) => (val === 0) ? acc + 1 : acc, 0);

// Two Sum -- Leet Code

let arrNumber = [2, 7, 15, 6, 5];
let twoSum = function(nums, target) {
	nums.reduce((acc, val, idx, arrs) => {
	if (target === acc + val) {
		console.log(arrs.indexOf(val));
    }
    });
};

twoSum(arrNumber, 9);