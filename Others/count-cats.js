'use strict';

/**
 * That a 'cat' symbols that we need to count
 * @type {string} (cat)
 * @author Aliaksei Deboi
 */
const CAT = '^^'

/**
 * This function counts 'cats' in array.
 * @param array (2d array)
 */
const countCats = (array) => {
    let length = 0;
    array.forEach(value => {
        value.forEach(v => {
            if (v === CAT) {
                length++;
            }
        });
    })
    return length;
}

