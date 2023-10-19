const names: string[] = [];
names.push("Dylan"); // no error
names.push("Sourov");
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

console.log(names)



const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error

// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log("Show here the number array : ", numbers);

let head: number = numbers[2]; // no error

console.log("print head", head);