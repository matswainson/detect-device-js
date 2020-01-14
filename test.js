var assert = require('assert');
const detectDevice = require('./');

  describe('detectDevice', function() {
    it('device type === "unknown"', function() {
      assert.equal(detectDevice.type, 'Unknown');
    });
  });