//for loop

//we want to write a program that greets someone 10 times

// 

const theOwnerOfTheLaptop = "Eric"

const theThief = "Jane"

const outClass = ["James,Joan,Eric,John,Jane,Jack"]

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