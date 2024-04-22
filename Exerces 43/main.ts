// Define a function to print each magicine name form an array
function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
// function to make magicines great through .map() it will modify array
function make_great(magicians:string[]){
    return magicians.map(name =>`The Great ${name}`);
}
// Define an array of magicians name
let magicians_names = ["Harry poter","Jhon Meacal", "Aurangzaib Mughal"];

let copy_magicain_names = magicians_names.slice();


// Modify the copied Arry to incilud "The Great" with thier names
let copy_great_magicians = make_great(copy_magicain_names);

// shown both Arrays Orignal and Copied
show_magician(magicians_names);

// Orignal
console.log("Orignal Array\n");
show_magician(copy_great_magicians);


// copied
console.log("Copied Array\n");
show_magician(copy_great_magicians);
