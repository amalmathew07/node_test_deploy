const utils = require('./utils');
const expect = require('expect');
it ('Add two nos.', () => {
    var res = utils.sum(4,5);

    expect(res).toBe(9)
    /* if (res != 9) {
    throw new Error("Value not correct");
    } else {
        console.log("Passed");
    } */
})