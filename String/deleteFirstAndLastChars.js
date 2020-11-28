'use strict';

/**
 * This function deletes first and last characters in given string.
 * @param s (have at least 2 characters)
 * @returns {string} same string without first and last characters
 * @author Aliaksei Deboi
 */

const newString = (s) => {
    let str = "";
    //starting from char at first position
    for (let i = 1; i < s.length - 1; i++) {
        str+=s[i];
    }
    return str;
}