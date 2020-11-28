'use strict';

/**
 * This function deletes duplicates from array/
 * @param a (array)
 * @returns {*} array without duplicates elements
 * @author Aliaksei Deboi
 */
const distinct = (a) => {
    return a.filter((value, index) => a.indexOf(value) === index);
}