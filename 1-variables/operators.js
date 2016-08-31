// 1 - Assign the value 17 to a variable called 'pi'
var pi = 17;
// 2 - Create a new variable called peeps and assign it the value of pi
var peeps = pi;
// 3 - Decrease the value of peeps by 1
peeps -= 1;
// 4 - Write a console log that checks if pi is equal to peeps
console.log(pi === peeps);

// consider using ===, in this case you would get the same thing, but what
// if one of the values was a string? For ex see the following:

var pi = '17';
var test = 17;

console.log(test === pi);
