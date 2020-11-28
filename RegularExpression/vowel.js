'use strict';

/**
 * Regular expression
 * @type {RegExp}
 * @author Aliaksei Deboi
 */
const REGEX = /^[aeiou]$/gi;

/**
 * This method in string prototype returns boolean value whether given value is a vowel.
 * @returns {boolean} true if given value is a vowel, false otherwise.
 * @author Aliaksei Deboi
 */
String.prototype.vowel = function () {
    return !!this.match(REGEX);
}