// Creating a Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// using for loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var oridnalEnding = void 0;
    if (oneNumber === 1) {
        oridnalEnding = "st";
    }
    else if (oneNumber === 2) {
        oridnalEnding = "nd";
    }
    else if (oneNumber === 3) {
        oridnalEnding = "rd";
    }
    else {
        oridnalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(oridnalEnding));
}
