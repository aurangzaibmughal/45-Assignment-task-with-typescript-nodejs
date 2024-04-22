// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
var guestList = ["Mirza", "Nouman", "pasha", "Mani"];
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 gest.");
guestList.unshift("alice , bob");
// print message updated list.
console.log("updated list of guest:", guestList);
// remove guest from the list.
while (guestList.length > 1) {
    var removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log("Sorry, ".concat(removedGuest, ", we cant invite you."));
    }
}
//  Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " ,you both are invited for the dinner."));
});
// remove 2 names from the list
guestList.splice(0, guestList.length);
// print updatedempty list
console.log("updtaed list of guest:", guestList);
