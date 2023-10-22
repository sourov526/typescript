// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
// Using the | we are saying our parameter is a string or number:
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
