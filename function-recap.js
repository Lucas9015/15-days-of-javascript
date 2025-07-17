// functions

//how to declare


function addTwoNumbers(num1, num2) {
}
    
    if(!num1 || !num2) {
        console.log("Please provide two numbers")
        return;
    }
    
    const result = num1 + num2
    
    return result;
    
    
    
    // console.log(result) }
    // addTwoNumbers(5, 10);
    
    function multipleSumBy(sum){
        console.log('the product is ${sum * 2}');
        
    }
    
    const num1 = prompt("Enter first number");
    const num2 = prompt("Enter second number");

    const theSum = addTwoNumbers(num1, num2);

    //console.log(the sum)

    document.getElementById("sum").innerHTML = theSum;

    multipleSumBy(theSum);
