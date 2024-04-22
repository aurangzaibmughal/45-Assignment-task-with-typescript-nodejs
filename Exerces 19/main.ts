// QUESTION NO.19
// Dinner Guests: Working with one of the programs 
// from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestList: string[] = ["Mirza" , "Nouman" , "pasha", "Mani"];
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 gest.");

guestList.unshift("alice , bob");

// print message updated list.
console.log("updated list of guest:",guestList);

// remove guest from the list.
while (guestList.length > 1) {
    let removedGuest :string | undefined = guestList.pop();
    
}
//  Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(guest =>{
    console.log(`Dear ${guest} ,you both are invited for the dinner.`);

})

// remove 2 names from the list
guestList.splice(0,guestList.length)

// print updatedempty list




