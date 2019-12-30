
var content = document.querySelector('#content');

content.innerHTML = "President " + pres.fullName() + " was president number " + pres.order + " of the United States of America.";


for (let property in pres) {
    console.log(`Property ${property} has a datatype of ${typeof(pres[property])}`);
}

for (let property of Object.getOwnPropertyNames(pres)) {
    console.log(`Pres own property ${property} has a datatype of ${typeof(pres[property])}`);
    }