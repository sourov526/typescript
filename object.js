// Try playing around with modifying properties and adding ones to see what happens
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
// TypeScript can infer the types of properties based on their values.
var new_car = {
    type: "Toyota"
};
new_car.type = "Ford"; // no error
//   new_car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
console.log(new_car);
// no error on optional property, remove it and see what happens
var optional_car = {
    type: "Toyota"
};
optional_car.mileage = 2000;
console.log("Optional car : ", optional_car);
// here index(key) must be string and value must be number type
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
