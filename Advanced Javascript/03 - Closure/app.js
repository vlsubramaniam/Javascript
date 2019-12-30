
//Add a click handler to the javascript logo. The first time it is clicked after the page loads, display to the console: 
// "You have clicked this logo for the first time."

(function() {
let clicked = 0;
let logo = document.querySelector('#logo');
logo.addEventListener('click', () => {
if (clicked > 0) {
    console.log('You have clicked the logo again.');
} else {
    console.log('You have clicked this logo for the first time.');
    clicked += 1;
}
});
})();

//The second and subsequent clicks, display "You have clicked the logo again."

//Create this without using any global variables.

