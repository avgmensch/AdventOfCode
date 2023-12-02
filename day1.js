// @ts-check

/**
 * https://adventofcode.com/2023/day/1
 * @param {string} str
 * @returns {number}
 */
export function aocDay1(str) {
  let numbers = [];

  for (let i = 0; i < str.length; i++) {
    let charAsInt = parseInt(str[i]);
    if (!isNaN(charAsInt)) numbers.push(charAsInt);
  }

  if (numbers.length == 0) return 0;
  return numbers[0] * 10 + numbers[numbers.length - 1];
}
