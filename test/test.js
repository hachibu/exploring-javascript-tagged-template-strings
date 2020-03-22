var assert     = require('assert'),
    requireDir = require('require-dir');

describe('src/examples', function() {
  this.timeout(5000);

  before(function() {
    console.log = function() {};
  });

  it('should work', function() {
    requireDir('../src/examples', { recurse: true });
  });
});
