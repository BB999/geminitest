
const assert = require('assert');
const { add } = require('./index.js');

assert.strictEqual(add(1, 2), 3, '1 + 2 should equal 3');
console.log('All tests passed!');
