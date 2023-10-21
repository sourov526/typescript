// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
var currentDirection = CardinalDirections.North;
// North is the first value so it logs '0'
console.log(currentDirection);
// throws error when commented in as 'North' is not a valid enum
// currentDirection = 'North'; 
// Error: "North" is not assignable to type 'CardinalDirections'.
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["North"] = 1] = "North";
    CardinalDirection[CardinalDirection["East"] = 2] = "East";
    CardinalDirection[CardinalDirection["South"] = 3] = "South";
    CardinalDirection[CardinalDirection["West"] = 4] = "West";
})(CardinalDirection || (CardinalDirection = {}));
;
// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirection.North);
// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirection.West);
// You can assign unique number values for each enum value. Then the values will not incremented automatically:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
var CardinalDirections_str;
(function (CardinalDirections_str) {
    CardinalDirections_str["North"] = "North";
    CardinalDirections_str["East"] = "East";
    CardinalDirections_str["South"] = "South";
    CardinalDirections_str["West"] = "West";
})(CardinalDirections_str || (CardinalDirections_str = {}));
;
// logs "North"
console.log(CardinalDirections_str.North);
// logs "West"
console.log(CardinalDirections_str.West);
