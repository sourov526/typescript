// define specific type
let firstName: string; // type string
firstName = "Sourov"
console.log(typeof firstName);

let num: number = 10;
console.log(typeof num)

let is_true: boolean = true;
console.log(typeof is_true)


// type any
let v: any = true;

v = "string"; // no error as it can be "any" type
// no type error in the editor, but will still throw an error if commented in

console.log("show the value of v : ", v); // no error as it can be "any" type


// type nuknown
let w: unknown = 1; 
w = "string"; // no error

console.log("type of w : ", typeof w)

w = { 
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  } 
} as { runANonExistentMethod: () => void }


console.log("show here the value of w : ", w)
// How can we avoid the error for the code commented out below when we don't know the type? 
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'. 
console.log("type of w : ", typeof w)
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod(); 
} 
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting



// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let y: undefined = undefined;
console.log(typeof y);

let z: null = null;
console.log(typeof z);