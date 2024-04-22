//  QUESTION NO. 18
// Seeing the World: Think of at least five places in the world you like to visit.

let placeToVist: string[] = ["paris","newyork", "rome", "italy","chaina"];

// Print in orignal order
console.log("orignal order:", placeToVist);

// print arry in alphabetical order without modifying the actual list.

console.log("Alphabetical order:", placeToVist.slice().sort());

//  array is still in its original order by printing it.
console.log("orignal order:", placeToVist);

// Print the array to show that its order has changed.

console.log("reverse order:", placeToVist.slice().sort());
//  array is still in its original order by printing it.

console.log("orignal order:", placeToVist);
// Reverce the order of your list. print the show that its order has changed. 

console.log("reverce order changed");
placeToVist.reverse();
console.log(placeToVist);

console.log("reverce alphapetical order changed:", placeToVist.sort().reverse());
console.log(placeToVist);








