// Define a function to create a car object with optional option.....
function create_car(manufecture, model, ... options){
    // Initialize a car object with manufecturer and model

    let car = {
        manufecture: manufecture,
        model: model
    };
    //  Add additional opttion to the car object

    options.forEach(options => {

        let [key, value] = options.split(" : ");

        car[key.trim()] = value.trim();

    });

    return car;

}

let my_car = create_car ("Toyota", "Corrola", "colore : black","Sunroof : true","Year : 2022");
console.log(my_car);