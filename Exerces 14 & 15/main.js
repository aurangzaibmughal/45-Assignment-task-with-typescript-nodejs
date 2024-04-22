//QUESTION NO. 14
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Mirza", "Nouman", "pasha", "Mani"];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are cordially invited to dinner."));
});
// QUESTION NO. 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
var guestlist = ["Mirza", "Nouman", "pasha", "Mani"];
var unablegest = guestList.splice(2, 1)[0];
console.log("".concat(unablegest, " not invited for the dinner."));
// // push
guestList.push("Aurangzaib");
// // print a message
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are cordially invited."));
});
// QUESTION NO.16
// let guestList: string[] = ["Mirza" , "Nouman" , "pasha", "Mani"];
// console.log("Great News! we found a bigger table.");
// // unshift
// guestList.unshift("Hammad");
// console.log(guestList);
// // splice()
// guestList.splice(Math.floor(guestList.length/2),0, "ibrahim");
// // push
// guestList.push("Hyder")
// // foreach
// guestList.forEach(guest => {
//     console.log(`Dear, ${guest}, You are cordially invited to dinner.`);
// });
