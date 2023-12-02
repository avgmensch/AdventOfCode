// @ts-check

/**
 * # Day 1
 *
 * The newly-improved calibration document consists of lines of text; each line originally
 * contained a specific calibration value that the Elves now need to recover. On each line, the
 * calibration value can be found by combining the first digit and the last digit (in that order)
 * to form a single two-digit number.
 *
 * https://adventofcode.com/2023/day/1
 *
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
