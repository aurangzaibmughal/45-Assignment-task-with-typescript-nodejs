var current_users = ["Admin", "Admin", "pasha", "Honny", "Ureeba"];
// Array of New Users
var new_users = ["Aurangzaib", "Ibraheem", "ureeba ", "Noman", "Admin"];
// loop through new user to check for usernames availblity.
new_users.forEach(function (newUsers) {
    if (current_users.some(function (currentUsers) { return currentUsers.toLocaleLowerCase() === newUsers.toLocaleLowerCase(); })) {
        console.log("".concat(newUsers, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUsers, " is available."));
    }
});
