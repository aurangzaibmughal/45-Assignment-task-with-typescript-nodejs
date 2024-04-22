// Define veriable
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple" , "banana" , "orange"];

// Tests for equality and inequality with strings

console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIsapple is not equal to apple?");
console.log(apple != "apple");

//  Tests using the lower case function
console.log("\nIs AAPLE is equal to after nconverting to lowercase?");
console .log(upperCaseApple.toLocaleLowerCase() == "apple");

// Not equalto
console.log("\nIs AAPLE is not equal to after nconverting to lowercase?");
console .log(upperCaseApple.toLocaleLowerCase() != "apple");

// • Numerical test
// Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

// Not equal to  
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater the 
console.log("\nIs ten is greater then zero?")
console.log(ten > 0);

// Less then
console.log("\n Is twenty is  less then 10?");
console.log(twenty < 10);

// Greater than equal to 
console.log("\n Is ten is greater then or equal to 5?");
console.log(ten >= 5);

// Less then or equal to
console.log("\n  twenty is less then or equal to 10?");
console.log(twenty <= 10);

// Tests using "and" & "or" operators
console.log("\n twenty is not equal to 10 and twenty is grater then 10");
console.log(twenty != 10 && twenty > 10);

// using && (and)
console.log("\n twenty is not equal to 10 and twenty is grater then 30");
console.log(twenty != 10 && twenty > 30);

// using || (or)
console.log("\n 20 is greatern then 50 OR 20 not is equal to 20?");
console.log(20 > 50 || 20 == 20);


console.log("\n 20 is greatern then 50 OR 20 is equal to 20?");
console.log(20 > 50 || 20 != 20);

// Test whether an item is include in arry
console.log("\n Is orange not include in my Fruite arry?");
console.log(fruits.includes("orange"));











