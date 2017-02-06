import assert from 'assert';
import hexToRgba from '..';

describe('hex-to-rgba', function() {
  describe('6-digit hex values, no a', function() {
    it('should calculate correct rgb values', function() {
      assert.equal('rgb(17, 34, 51)', hexToRgba('112233'));
    });

    it('should ignore a leading hash sign', function() {
      assert.equal('rgb(17, 34, 51)', hexToRgba('#112233'));
    });

    it('should correctly calculate uppercase hex', function() {
      assert.equal('rgb(127, 127, 127)', hexToRgba('#7F7F7F'));
    });

    it('should correctly calculate lowercase hex', function() {
      assert.equal('rgb(127, 127, 127)', hexToRgba('#7f7f7f'));
    });
  });

  describe('6-digit hex values, a as parameter', function() {
    it('should calculate rgba values from hex and string alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('112233', '0.5'));
    });

    it('should calculate rgba values from hex and numerical alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('112233', 0.75));
    });

    it('should handle the edge case where alpha value is 1', function() {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('112233', 1));
    });

    it('should handle the edge case where alpha value is 0', function() {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('112233', 0));
    });

    it('should calculate rgba values from hex with leading hash and string alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('#112233', '0.5'));
    });

    it('should calculate rgba values from hex with leading hash and numerical alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('#112233', 0.75));
    });
  });

  describe('3-digit hex values, no a', function() {
    it('should calculate correct rgb values', function() {
      assert.equal('rgb(17, 34, 51)', hexToRgba('123'));
    });

    it('should ignore a leading hash sign', function() {
      assert.equal('rgb(17, 34, 51)', hexToRgba('#123'));
    });
  });

  describe('3-digit hex values, a as parameter', function() {
    it('should calculate rgba values from hex and string alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('123', '0.5'));
    })

    it('should calculate rgba values from hex and numerical alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('123', 0.75));
    });

    it('should handle the edge case where alpha value is 1', function() {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('123', 1));
    });

    it('should handle the edge case where alpha value is 0', function() {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('123', 0));
    });

    it('should calculate rgba values from hex with leading hash and string alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('#123', '0.5'));
    });

    it('should calculate rgba values from hex with leading hash and numerical alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('#123', 0.75));
    });
  });

  describe('8-digit hex values, no a', function() {
    it('should calculate correct rgb values', function() {
      assert.equal('rgba(17, 34, 51, 0.27)', hexToRgba('11223344'));
    });

    it('should ignore a leading hash sign', function() {
      assert.equal('rgba(17, 34, 51, 0.27)', hexToRgba('#11223344'));
    });

    it('should remove trailing zeros', function() {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('1122337f'));
    });

    it('should handle the edge case where alpha value is 1', function() {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('112233ff'));
    });

    it('should handle the edge case where alpha value is 0', function() {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('112233', 0));
    });

  });

  describe.skip('8-digit hex values, a as parameter (separate parameter should override alpha in hex)', function() {
    it('should calculate rgba values from hex and string alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('11223344', '0.5'));
    })

    it('should calculate rgba values from hex and numerical alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('11223344', 0.75));
    });

    it('should handle the edge case where alpha value is 1', function() {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('11223344', 1));
    });

    it('should handle the edge case where alpha value is 0', function() {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('11223344', 0));
    });

    it('should calculate rgba values from hex with leading hash and string alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('#11223344', '0.5'));
    });

    it('should calculate rgba values from hex with leading hash and numerical alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('#11223344', 0.75));
    });
  });

  describe.skip('4-digit hex values, no a', function() {
    it('should calculate correct rgb values', function() {
      assert.equal('rgba(17, 34, 51, 0.27)', hexToRgba('1234'));
    });

    it('should ignore a leading hash sign', function() {
      assert.equal('rgb(17, 34, 51, 0.27)', hexToRgba('#1234'));
    });

    it('should handle the edge case where alpha value is 1', function() {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('123f'));
    });

    it('should handle the edge case where alpha value is 0', function() {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('1230'));
    });
  });

  describe.skip('4-digit hex values, a as parameter (separate parameter should override alpha in hex)', function() {
    it('should calculate rgba values from hex and string alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('1234', '0.5'));
    })

    it('should calculate rgba values from hex and numerical alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('1234', 0.75));
    });

    it('should handle the edge case where alpha value is 1', function() {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('1234', 1));
    });

    it('should handle the edge case where alpha value is 0', function() {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('1234', 0));
    });

    it('should calculate rgba values from hex with leading hash and string alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('#1234', '0.5'));
    });

    it('should calculate rgba values from hex with leading hash and numerical alpha value', function() {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('#1234', 0.75));
    });
  });
});
