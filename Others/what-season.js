'use strict';


/**
 * This function returns the time of the year by passed Date object
 * @param date object
 * @returns {string} the time of the year
 * @author Aliaksei Deboi
 */
const season = (date) => {
    try {

        if (date === undefined) {
            return 'Unable to determine the time of year!';
        }

        let month = date.getMonth();
        switch (month) {
            case 0:
            case 1:
            case 11:
                return 'winter';
            case 2:
            case 3:
            case 4:
                return 'spring';
            case 5:
            case 6:
            case 7:
                return 'summer';
            case 8:
            case 9:
            case 10:
                return 'autumn';
            default:
                throw new Error("Error!");
        }
    } catch (e) {
        if (e instanceof Error) {
            console.log("You got an error!");
        } else {
            throw e;
        }
    }
}