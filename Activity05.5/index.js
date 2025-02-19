// Author: Alexander Gallentine
// email : monreal@iastate.edu 
// Date : Feb 9-12, 2025  

// let d4 = new Date();
// alert("Today's date is " + d4+"when execute content External file");
// // message to console
// console.log("Hello Class from External Javascript file")
// // change page color
// document.body.style.backgroundColor = 'green';


let name = "COMS 319"
console.log(name)
alert(name)
console.log("Hello")

function getRandomInt (max)
{
    let temp = Math.random()  //generate random number between 0 and 1
    console.log(temp)
    console.log(temp*max)
    return Math.floor(temp*max)  //rounds down to next lowest whole number
}

console.log(getRandomInt(3));


points = 75;
y = points >= 100? 'approve' : 'fail'
console.log(y)

console.log(false || 'Anytext')


// other good to knows ! = not && = and || = or
// strict equality is ===
// loose equality is ==


tempArray = [1,2,3,'red','blue']
console.log(tempArray)
console.log(tempArray[3])
tempArray[3] = 'green'
console.log(tempArray)
// Arrays can dynamically change and grow. If you have an array of size 5 but add an item at index 7 you will create 2 'empty' spots
// .length and .sort() do what they sound like they do