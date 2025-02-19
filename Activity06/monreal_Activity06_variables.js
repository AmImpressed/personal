// Author: Alexander Gallentine
// email : monreal@iastate.edu 
// Date : Feb 14-20, 2025  

console.log("---- I am in V A R I A B L E S ----")

// Q1 : Is it permited the next ?
console.log("Q1 ---------------")
var var1 = "Iowa";
console.log(var1);
var var1 = 124;
console.log(var1);
// Is it permited ?
console.log("Yes");

// Q2 : Is it valid ?
console.log("Q2 ----------------");
let var2 = "Ames";
console.log(var2);
// let var2 = 124;  No, you can't redeclare a var that is set with 'let'
// Is it valid ?
console.log("Not");

// Q3 : Is it valid ?
console.log("Q3 ----------------");
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);
console.log("Valid")

// Q4 : Explain the Error.
console.log("Q4 ----------------");
let var4;
// const var5;
console.log("What's the error : Did not initialize the value of the constant.")
// Uncaught SyntaxError: Missing initializer in const declaration

// Q5 : Explain the Error.
console.log("Q5 ----------------");
const var6 = 3.1415;
// var6 = 2.8;
console.log("What's the error : Can't reassign a 'const' type variable's value.")
// Uncaught TypeError: Assignment to constant variable.

// Q6 : Explain the Error.
let firstName = "Abraham";
console.log("firstName");
// Can't have a space
let twoNumbers = [1,2];
// Can't start with a number
console.log("twoNumbers");
let city_state = "Ames Iowa";
// Can't use a '-'
console.log("city_state");

// Q7 : What !! ??
let mainCity = "DesMoines";
console.log("This is the Capital :", mainCity)
console.log("Capitalization matters so MainCity =/= mainCity")
// Uncaught ReferenceError: MainCity is not defined

// Q8 : "let" and "const" scope vs "var" scope
if (5 === 5) {
    var var7 = 100;
    }
    console.log(var7);
    if (5 === 5) {
    // let var8 = 100;
    var var8 = 100;
    }
    console.log(var8);
    console.log("'let' is a block scoped variable and is called outside of the if block, therefore it is considered undefined.")
// Uncaught ReferenceError: var8 is not defined
