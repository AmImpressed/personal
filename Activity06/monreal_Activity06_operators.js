// Author: Alexander Gallentine
// email : monreal@iastate.edu 
// Date : Feb 14-20, 2025  

console.log("---- I am in O P E R A T O R S ----")
// Write down about reason/outcome of each problem. 

// Q1 : 5 + 9 / 2 + 1
// Division is done first: 9 / 2 = 4.5
// Then addition from left to right: 5 + 4.5 = 9.5; then 9.5 + 1 = 10.5
console.log(5 + 9 / 2 + 1)

// Q2 : 10 / 4 + 7 % 4
// Division: 10 / 4 = 2.5
// Modulus: 7 % 4 gives the remainder when 7 is divided by 4, which is 3
// Then addition: 2.5 + 3 = 5.5
console.log(10 / 4 + 7 % 4)

// Q3 : (5 - 1) * ((7 + 1) / (3 - 1))
// Parentheses are evaluated first:
// (5 - 1) = 4
// (7 + 1) = 8 and (3 - 1) = 2, so (8 / 2) = 4
// Multiplication: 4 * 4 = 16
console.log((5 - 1) * ((7 + 1) / (3 - 1)))

// Q4 : 10 / 4 >= 10 / 3
// 10 / 4 = 2.5 and 10 / 3 ≈ 3.333
// Check: 2.5 >= 3.333 is false
console.log(10 / 4 >= 10 / 3)

// Q5 : 10 >= 10 && 10 <= 10
// Both comparisons are true since 10 is equal to 10:
// 10 >= 10 is true and 10 <= 10 is true; true && true gives true
console.log(10 >= 10 && 10 <= 10)

// Q6: Strict Equality
// (Type AND Value)
console.log(1 === 1) 
// 1 === 1 is true because both the type and value are identical
console.log('1' === 1)
// '1' === 1 is false because one is a string and the other is a number

// Q7 : Loose Equality
console.log('1' == 1)
// '1' == 1 returns true because the string '1' is coerced to number 1
console.log(true == 1)
// true == 1 returns true because true is coerced to 1 when compared
