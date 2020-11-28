'use strict';

/**
 * This object represents simple chain
 * @type {{chain: [],
 *         reverseChain(): this,
 *         getLength(): chainMaker.chain.length,
 *         removeLink(*): this,
 *         finishChain(): *,
 *         addLink(*): this}}
 *
 * @author Aliaksei Deboi
 */
const chainMaker = {

    /**
     * This is chain
     */
    chain: [],

    /**
     * This method returns length of the chain
     * @returns {number} (length of our chain)
     */
    getLength() {
        return this.chain.length;
    },

    /**
     * This function adds a new value to chain
     * @param value
     * @returns {chainMaker} (chain)
     */
    addLink(value) {
        this.chain.push(`~(${value})~`);
        return this;
    },

    /**
     * This function deletes link from chain
     * @param position (position > 0 and position < chain.length)
     * @returns {chainMaker} (chain)
     */

    removeLink(position) {
        this.chain.splice(position - 1, 1);
        return this;
    },

    /**
     * This function just reverses chain
     * @returns {chainMaker}
     */
    reverseChain() {
        this.chain.reverse();
        return this;
    },

    /**
     * This function converts chain to string and returns it
     * @returns {string}
     */
    finishChain() {
        let finishedChain = this.chain.join('').slice(1, -1);
        this.chain = [];
        return finishedChain;
    },
}