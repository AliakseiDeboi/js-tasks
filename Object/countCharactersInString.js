'use strict';

/**
 * This function counts characters in string.
 * @param string in input
 * @returns {{}} pair key-value
 * @author Aliaksei Deboi
 */
const count = (string) => {
    let res = {};
    string = string.split('');
    for (let i = 0; i < string.length; i++) {
        if (res.hasOwnProperty(string[i])) {
            res[string[i]] += 1;
        } else {
            res[string[i]] = 1;
        }
    }
    return res;
}

