'use strict';

/**
 * This function finds greatest common divisor (using recursion)
 * @param x (x >=1)
 * @param y (y >=1)
 * @returns {*} greatest common divisor
 * @author Aliaksei Deboi
 */
const gcd = (x, y) => {
    if (y > 0) {
        return gcd(y, x % y);
    }
    return x;
}