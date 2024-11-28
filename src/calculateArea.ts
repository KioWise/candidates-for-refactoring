enum ShapeType {
  Circle,
  Square,
}

function calculateArea(shape: ShapeType, radiusOrSide: number): number {
  let area = 0;
  switch (shape) {
    case ShapeType.Circle:
      area = Math.PI * Math.pow(radiusOrSide, 2);
      break;
    case ShapeType.Square:
      area = Math.pow(radiusOrSide, 2);
      break;
  }
  return Number(area.toFixed(2)); // Если Output = 78.54, то измененил return
}

console.log(calculateArea(ShapeType.Circle, 5)); // Output: 78.54
