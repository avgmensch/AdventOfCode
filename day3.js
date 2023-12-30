//@ts-check

/**
 * https://adventofcode.com/2023/day/3
 * @param {string} engineSchema Visual representation of the engine.
 * @returns {number} Sum of numbers adjacent to a symbol.
 */
export function aocDay3(engineSchema) {
  const matrix = engineSchema.split("\n").map(row => row.split(""))
  const [width, height] = [matrix[0].length, matrix.length]

  /** @type {{x: number, y: number}[]} */
  const gears = []
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < height; x++) {
      if (charIsGear(matrix[y][x])) {
        gears.push({x: x, y: y})
      }
    }
  }

  for (let i = 0; i < gears.length; i++) {
    
  }

  return 0;
}

/**
 * Returns `true`, when `char` isn't numerical nor `"."`.
 * @param {string} char 
 * @returns {boolean}
 */
function charIsGear(char) {
  return !(
    char == "1" ||
    char == "2" ||
    char == "3" ||
    char == "4" ||
    char == "5" ||
    char == "6" ||
    char == "7" ||
    char == "8" ||
    char == "9" ||
    char == "0" ||
    char == "."
  );
}
