// Define a function to create a car object with optional option.....
function create_car(manufecture, model) {
    // Initialize a car object with manufecturer and model
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufecture: manufecture,
        model: model
    };
    //  Add additional opttion to the car object
    options.forEach(function (options) {
        var _a = options.split(" : "), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = create_car("Toyota", "Corrola", "colore : black", "Sunroof : true", "Year : 2022");
console.log(my_car);
