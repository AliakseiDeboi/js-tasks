'use strict';

/**
 * Regular expression
 * @type {RegExp}
 * @author Aliaksei Deboi
 */
const REGEX = /^[a-z0-9_]{4,16}$/g;

/**
 * This function validates username according to pattern
 * @param username
 * @returns {*|boolean} true if validates, false otherwise
 * @author Aliaksei Deboi
 */
const validate = (username) => {
    return REGEX.test(username);
}