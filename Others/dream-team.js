'use strict';

/**
 * This function creates a string that consists of first letters
 * of the names of its members in upper case sorted alphabetically.
 * @param members (names of it's members)
 * @returns {string} (consists of first letters
 * of the names of its members in upper case sorted alphabetically)
 * @author Aliaksei Deboi
 */
const createDreamTeam = (members) => {
    const team = [];
    members.forEach((value) => {
        if (typeof value == "string") {
            team.push(value.charAt(0)
                .toUpperCase());
        }
    })
    return team.sort()
        .join('');
}
