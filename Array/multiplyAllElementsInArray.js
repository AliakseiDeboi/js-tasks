'use strict';

/**
 * This function multiplies each value in array by multiplier
 * @returns {function(*): *} new array
 * @author Aliaksei Deboi
 * @param arr
 */
const multiplyAll = (arr) => (mul) => arr.map(element => element * mul)