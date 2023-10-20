// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);
// define our tuple
var ourTuples;
// initialize correctly
ourTuples = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuples.push('Something new and wrong');
console.log(ourTuples);
