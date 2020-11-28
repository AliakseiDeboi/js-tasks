'use strict';

/**
 * This function reverse string.
 * @param s (string)
 * @returns {string} reversed string
 * @author Aliaksei Deboi
 */
const reverse = (s) => {
    //if our string is empty - we will end recursion
    if (s === '') {
        return '';
    }
    return reverse(s.substr(1)) + s.charAt(0);
}