//conditionals

/* */
// comparison operators-

// ==
// ===
// !=
// >
// <
// >=
// <=

const marks = 60;

//fail, pass, distinction

// if(marks>80){
//     console.log("You have passed exellently")

// }else if(marks>50){
//     console.log("You have passed")
// }else{
    //     console.log("You have failed")
    // }
    
    // switch case
    
    const role = "Developer";

//manager = 200.0000, ceo - 500.0000, developer - 100.0000
switch(role){
    case "Manager":
        console.log("Salary is 200.0000");
        break;
    case "CEO":
        console.log("Salary is 500.0000");
        break;
    case "Developer":
        console.log("Salary is 100.0000");
        break;
        
    default:
        console.log("Role not found");
}
