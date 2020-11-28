'use strict';

/**
 * This function returns the factorial of a number
 * @param n (number that less that 12 and above 0. If now, RangeError will occur)
 * @returns {number} factorial of a number
 * @author Aliaksei Deboi
 */

const factorial = (n) => {
    let res = 1;
    if (n === 0) {
        return 1;
    } else if (n > 12 || n < 0) {
        throw new RangeError("Your number must be less that 12 and above 0!");
    } else {
        for (let i = 1; i <= n; i++) {
            res *= i;
        }
    }
    return res;
}

