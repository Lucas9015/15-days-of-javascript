// functions are mini progams within out application that perform a particular operation

//fuction declaration

// function nameOfFunction() {
//     console.log("Hello World");
// }

// nameOfFunction()

// function findTheThief() {
// }

// //function expressions

// Remove the incorrect function expression
// const findTheThief = function() => {

const findTheThief = (theOwnerOfTheLaptop, theThief, ourClass) => {

for(let i = 0; i < outClass.length; i++) {
    if(outClass[i] === theOwnerOfTheLaptop) {
        continue
}
if(ourClass[i] === theThief) {
    console.log('I have found the laptop at ${ourClass[i]}')
    break
}
    console.log("I have searched" + " " + ourClass[i])
}
}

// console.log(theOwnerOfTheLaptop)

const theFirstClass = ["James", "Joan", "Eric", "John", "Jane", "Jack"]

findTheThief("Eric", "Jane", theFirstClass)

console.log("............")

findTheThief("Joan","alex","reuben","Hope","Jack")