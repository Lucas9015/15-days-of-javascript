//DATATYPES

//STRIN, NUMBERS, BOOLEAN, OBJECTS, ARRAYS

const mystring = "Hello"
const myNumber = 42
const myBoolean = true

const myobj = {
    name: "John",
    age: 30,
}

const myarr = ["hello", "world", 42, true]

const findTheThief = ({theThief, theOwnerOfTheLaptop, ourClass}) => {

const findTheThief = (theOwnerOfTheLaptop, theThief, ourClass) => {
    for(let i = 0; i < ourClass.length; i++) {
        if(ourClass[i] === theOwnerOfTheLaptop) {
            continue;
        }   
        if(ourClass[i] === theThief) {
            console.log(`I have found the laptop at ${ourClass[i]}`);
            break;
        }
        console.log("I have searched " + ourClass[i]);
    }
}

const theFirstClass = ["James", "Joan", "Eric", "John", "Jane", "Jack"];

findTheThief({
    theOwnerOfTheLaptop: "Eric", theThief: "Jane", ourClass: theFirstClass

})
}
