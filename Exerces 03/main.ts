// storing the person name in veriable

let personName = "aurangzaib mughal" 

// printing a person name in lower case

console.log(personName.toLowerCase());

// printing a person name in upper case

console.log(personName.toUpperCase());

// printing a person name in camel case

console.log(personName.replace(/\b\w/g,(char) => char.toUpperCase()));
