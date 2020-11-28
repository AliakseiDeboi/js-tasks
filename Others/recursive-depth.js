'use strict';

/**
 * This class represents DepthCalculator
 * @author Aliaksei Deboi
 */
class DepthCalculator {

    /**
     * This function returns max depth of given array
     * @param array
     * @returns {number} (maxDepth)
     */
    calculateDepth(array) {
        let depth = 0;
        let maxDepth = 1;
        array.forEach(element => {
            if(Array.isArray(element)){
                depth = this.calculateDepth(element) + 1;
                depth > maxDepth ? maxDepth = depth : '';
            }
        });
        return maxDepth;
    }
}

/**
 * Creating an instance
 * @type {DepthCalculator}
 */
const depthCalc = new DepthCalculator();