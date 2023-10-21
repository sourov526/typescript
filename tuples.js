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
// Named tuples allow us to provide context for our values at each index
var graph = [55.2, 41.3];
console.log("print the graph here : ", graph);
// Since tuples are arrays we can also destructure them.
var graphs = [55.2, 41.3];
var x = graphs[0], y = graphs[1];
console.log("print x here : ", x);
console.log("print y here : ", y);
