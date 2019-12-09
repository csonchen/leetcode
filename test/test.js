var assert = require('assert');
var { sortRemove, mergeArr } = require('../src/sortRemove_26');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

  describe('26', function() {
    it('[0, 0, 1, 1, 2, 3]', function() {
      assert.equal(sortRemove([0, 0, 1, 2, 3, 4]), 5)
    })

    it('[0, 2, 3] merge [1, 4, 5] get [0, 1, 2, 3, 4, 5]', function() {
      assert.deepEqual(mergeArr([0, 2, 3], [1, 4, 5]), [0, 1, 2, 3, 4, 5])
    })
  })
});