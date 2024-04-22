// Dinner Guests: Working with one of the programs 
// from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList = ["Mirza", "Nouman", "pasha", "Mani"];
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 gest.");
guestList.unshift("alice , bob");
// print message updated list.
console.log("updated list of guest:", guestList);
// remove guest from the list.
while (guestList.length > 1) {
    var removedGuest = guestList.pop();
}
//  Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " ,you both are invited for the dinner."));
});
// remove 2 names from the list
guestList.splice(0, guestList.length);
// print updatedempty list
