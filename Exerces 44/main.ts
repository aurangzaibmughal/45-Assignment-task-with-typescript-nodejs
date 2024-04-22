// Define a function with a rest parameter that accepted item arguments representing our sandwich.
function makeSandwich(...item: string[]){
    console.log("\nMaking a sandwich with the following items:\n");

    item.forEach(singleitem => console.log(singleitem));

    console.log("\nNow Enjoy Sandwich");

}
// Call the function three time with three diffrent number of arguments

makeSandwich("Chicken","Cheese", "Mayo", "Egg");

makeSandwich("Bread" , "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chickan" , "Lettuco" , "Tamato");

