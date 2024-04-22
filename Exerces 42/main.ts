// Define a function to print each magicine name form an array
function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
// function to make magicines great through .map() it will modify array
function make_great(magicians:string[]){
    return magicians.map(name =>`The Great ${name}`);
}
// Define an array of magicians name
let magicians_name = ["Harry poter","Jhon Meacal", "Aurangzaib Mughal"];

// Call make grat function to modify magicians name
let great_magicians = make_great(magicians_name);

console.log(great_magicians);

// Call show magician that show modified list of magicians
show_magician(great_magicians);