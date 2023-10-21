// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric

enum CardinalDirections {
    North,
    East,
    South,
    West
  };
              
  let currentDirection = CardinalDirections.North;
  
  // North is the first value so it logs '0'
  console.log(currentDirection);
  

  // throws error when commented in as 'North' is not a valid enum
  // currentDirection = 'North'; 
  // Error: "North" is not assignable to type 'CardinalDirections'.



  enum CardinalDirection {
    North = 1,
    East,
    South,
    West
  };
  
  // logs 1 since we initialized the first value to something other than '0'
  console.log(CardinalDirection.North);
  
  // logs 4 as it continued on from the initial '1' value
  console.log(CardinalDirection.West);



// You can assign unique number values for each enum value. Then the values will not incremented automatically:
  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  };
  
  // logs 404
  console.log(StatusCodes.NotFound);
  
  // logs 200
  console.log(StatusCodes.Success);


// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
enum CardinalDirections_str {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  
  // logs "North"
  console.log(CardinalDirections_str.North);
  
  // logs "West"
  console.log(CardinalDirections_str.West);