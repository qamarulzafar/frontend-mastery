// JavaScript Functions


// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).


function my_function(p1, p2){
    return p1 * p2;
}

console.log(my_function(1, 1))


// JavaScript Function Syntax

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)
// The code to be executed, by the function, is placed inside curly brackets: {}



function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }


//   Function Return
//   When JavaScript reaches a return statement, the function will stop executing.
  
//   If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
  
//   Functions often compute a return value. The return value is "returned" back to the "caller":



// Calculate the product of two numbers, and return the result:




function myfunction(a, b){
    return a * b;
}

let x = myfunction (4, 3)
console.log(x)



// The () Operator
// The () operator invokes (calls) the function:


// Convert Fahrenheit to Celsius:


function toCalcius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}


let value = toCalcius(12);
console.log(value)



// Accessing a function with incorrect parameters can return an incorrect answer:


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value1 = toCelsius();


// Accessing a function without () returns the function and not the function result:


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value2 = toCelsius;
  
  

//   Functions Used as Variable Values
// Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.


function sum(a, b){
    return a + b
}

let value4 = sum(5, 10)

let text  = "The sum of a , b is " + value4 + "."

console.log(text)



// You can use the function directly, as a variable value:

let text_1 = "The Sum of a, b is " + sum(5, 10) + "."

console.log(text_1)




// Local Variables

// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.


function myFunction() {
    let message  = "Hello";
    console.log(message)
}

myFunction()

// console.log(message)   Error






