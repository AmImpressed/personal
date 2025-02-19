// Author: Alexander Gallentine
// email : monreal@iastate.edu 
// Date : Feb 14-20, 2025  

console.log("---- I am in A R R A Y S ----")

// Q1 : Index of each color
let colors = ['red', 'blue', 'orange']
// It's best practice to declare the loop variable with "let" to keep it block-scoped:
for (let i=0; i<3;i++) {
    console.log(colors[i]);
}  
// At index 0, the color is 'red'; at index 1, it's 'blue'; and at index 2, it's 'orange'

// Q2 : Add a new element 'green'
colors[3] = 'green';
console.log(colors);
// Now the array becomes: ['red', 'blue', 'orange', 'green']

colors[4]='Brown';
// Typing 'colors' in the console (or logging it) will show the full array with all five elements

// Q3 : Length of the Array
console.log(colors.length);
// The length property returns the number of elements in the array
// Since there are now 5 elements, it outputs 5

// Note:
// Type 'colors.' + 'ctl+space' and you can pick length or a relvant selection