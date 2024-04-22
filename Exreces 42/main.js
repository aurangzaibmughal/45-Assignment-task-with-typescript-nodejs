// Define a function to print each magician name from an array
function show_magician(magician) {
    return magician.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians name
var magician_name = ["\nHarry poter", "jone Maecal", "ibrahim"];
// Call the function to print each magician name
show_magician(magician_name);
