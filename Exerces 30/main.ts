// Creating a Array
let userNames = ["Noman" , "Shani" , "Honny" , "Admin" , "Pasha"];

// Using for Each loop on Array

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report.`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})