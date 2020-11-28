'use strict';

/**
 * This is object that consists of control sequences
 * @type {{discardPrev: string, discardNext: string, doubleNext: string, doublePrev: string}}
 * @author Aliaksei Deboi
 */
const controlSequences = {
    doubleNext : '--double-next',
    doublePrev : '--double-prev',
    discardNext : '--discard-next',
    discardPrev : '--discard-prev',
}

/**
 * This function transforms an array according to control sequences
 * @param array
 * @returns {[]} (transformed array)
 * @author Aliaksei Deboi
 */
const transform = (array) => {
    let tempArray = array.slice(0, array.length);
    let transformedArray = [];

    if(!Array.isArray(tempArray)) {
        throw new Error("That's not an array!");
    }

    for(let i = 0 ;i < tempArray.length ; i++){
        switch (tempArray[i]) {
            case controlSequences.discardNext:
                if(!(i === tempArray.length-1)) {
                    tempArray[i+1] = null;
                }
                break;
            case controlSequences.discardPrev:
                if(!(i === 0)) {
                    tempArray[i-1] = null;
                }
                break;
            case controlSequences.doubleNext:
                if(!(i === tempArray.length-1)) {
                    tempArray.splice(i, 1, tempArray[i + 1]);
                }
                break;
            case controlSequences.doublePrev:
                if(!(i === 0)) {
                    tempArray.splice(i, 1, tempArray[i - 1]);
                }
                break;
            default:
                break;
        }
    }

    //we don't need to add control sequences to transformed array
    const sequences = Object.values(controlSequences);
    for(let i = 0; i < tempArray.length; i++){
        if(!sequences.includes(tempArray[i]) && tempArray[i] != null) {
            transformedArray.push(tempArray[i]);
        }
    }
    return transformedArray;
}