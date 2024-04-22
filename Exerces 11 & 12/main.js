// Question 11
//Names:Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
var names = [
    "ibraheem", "noman", "kashan", "sajid", "kamran"
];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(function (friend) {
    console.log(friend);
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
;
//Question # 13
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.
// for(let i = 0; i < names.length; i ++) {
// console.log(`Hellow,${names}! How are you today?`)
// }
// //for of loop
// for(let friendName of names) {
//     console.log(`Dear,${friendName}!How are you?`)
// };
