// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

// Casting is the process of overriding a type.


// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

let x: unknown = 'hello';

console.log((x as string).length);


// Using <> works the same as casting with as.
let y: unknown = 'hello';
console.log((<string>y).length);