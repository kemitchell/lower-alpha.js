var expect = require('chai').expect;
var alpha = require('..');

describe('lower-alpha', function() {
  [
    [1, 'a'],
    [26, 'z'],
    [27, 'aa'],
    [28, 'ba'],
    [29, 'ca']
  ].forEach(function(pair) {
    it('converts ' + pair[0] + ' to "' + pair[1] + '"', function() {
      expect(alpha(pair[0]))
        .to.equal(pair[1]);
    });
  });
});
