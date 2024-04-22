import { Console } from "console";

// Making a function
function make_shirt (size: string = "Large" , printmessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printmessage} print on shirt.`)
}
// Calling a function by default values
make_shirt();

// Calling a function now with Medium size and default message

make_shirt("Medium")


// Calling a function now with small size and also Diffrent print massage

make_shirt("Small" , "I Love JAvA SCRIPT")