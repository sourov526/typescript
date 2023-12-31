// Interfaces are similar to type aliases, except they only apply to object types.

// Try creating a new interface using it below
interface Rectangle {
    height: number,
    width: number
  };
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
  
  console.log(rectangle);



// Try creating a new interface and extending it like below
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(coloredRectangle);