// QUESTION NO.16

let guestList: string[] = ["Mirza" , "Nouman" , "pasha", "Mani"];
console.log("Great News! we found a bigger table.");
// unshift
guestList.unshift("Hammad");

console.log(guestList);

// splice()
guestList.splice(Math.floor(guestList.length/2),0, "ibrahim");

// push
guestList.push("Hyder")

// foreach
guestList.forEach(guest => {
    console.log(`Dear, ${guest}, You are cordially invited to dinner.`);
    
});
