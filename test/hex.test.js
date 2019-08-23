/* global describe it */
import assert from 'assert';
import hexToRgba from '..';

describe('hex-to-rgba', () => {
  describe('6-digit hex values, no a', () => {
    it('should calculate correct rgb values', () => {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('112233'));
    });

    it('should ignore a leading hash sign', () => {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('#112233'));
    });

    it('should correctly calculate uppercase hex', () => {
      assert.equal('rgba(127, 127, 127, 1)', hexToRgba('#7F7F7F'));
    });

    it('should correctly calculate lowercase hex', () => {
      assert.equal('rgba(127, 127, 127, 1)', hexToRgba('#7f7f7f'));
    });
  });

  describe('6-digit hex values, a as parameter', () => {
    it('should calculate rgba values from hex and string alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('112233', '0.5'));
    });

    it('should calculate rgba values from hex and numerical alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('112233', 0.75));
    });

    it('should handle the edge case where alpha value is 1', () => {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('112233', 1));
    });

    it('should handle the edge case where alpha value is 0', () => {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('112233', 0));
    });

    it('should calculate rgba values from hex with leading hash and string alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('#112233', '0.5'));
    });

    it('should calculate rgba values from hex with leading hash and numerical alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('#112233', 0.75));
    });
  });

  describe('3-digit hex values, no a', () => {
    it('should calculate correct rgb values', () => {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('123'));
    });

    it('should ignore a leading hash sign', () => {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('#123'));
    });
  });

  describe('3-digit hex values, a as parameter', () => {
    it('should calculate rgba values from hex and string alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('123', '0.5'));
    });

    it('should calculate rgba values from hex and numerical alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('123', 0.75));
    });

    it('should handle the edge case where alpha value is 1', () => {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('123', 1));
    });

    it('should handle the edge case where alpha value is 0', () => {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('123', 0));
    });

    it('should calculate rgba values from hex with leading hash and string alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('#123', '0.5'));
    });

    it('should calculate rgba values from hex with leading hash and numerical alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('#123', 0.75));
    });
  });

  describe('8-digit hex values, no a', () => {
    it('should calculate correct rgb values', () => {
      assert.equal('rgba(17, 34, 51, 0.27)', hexToRgba('11223344'));
    });

    it('should ignore a leading hash sign', () => {
      assert.equal('rgba(17, 34, 51, 0.27)', hexToRgba('#11223344'));
    });

    it('should remove trailing zeros', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('1122337f'));
    });

    it('should handle the edge case where alpha value is 1', () => {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('112233ff'));
    });

    it('should handle the edge case where alpha value is 0', () => {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('112233', 0));
    });
  });

  describe('8-digit hex values, a as parameter (separate parameter should override alpha in hex)', () => {
    it('should calculate rgba values from hex and string alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('11223344', '0.5'));
    });

    it('should calculate rgba values from hex and numerical alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('11223344', 0.75));
    });

    it('should handle the edge case where alpha value is 1', () => {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('11223344', 1));
    });

    it('should handle the edge case where alpha value is 0', () => {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('11223344', 0));
    });

    it('should calculate rgba values from hex with leading hash and string alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('#11223344', '0.5'));
    });

    it('should calculate rgba values from hex with leading hash and numerical alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('#11223344', 0.75));
    });
  });

  describe('4-digit hex values, no a', () => {
    it('should calculate correct rgb values', () => {
      assert.equal('rgba(17, 34, 51, 0.27)', hexToRgba('1234'));
    });

    it('should ignore a leading hash sign', () => {
      assert.equal('rgba(17, 34, 51, 0.27)', hexToRgba('#1234'));
    });

    it('should handle the edge case where alpha value is 1', () => {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('123f'));
    });

    it('should handle the edge case where alpha value is 0', () => {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('1230'));
    });
  });

  describe('4-digit hex values, a as parameter (separate parameter should override alpha in hex)', () => {
    it('should calculate rgba values from hex and string alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('1234', '0.5'));
    });

    it('should calculate rgba values from hex and numerical alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('1234', 0.75));
    });

    it('should handle the edge case where alpha value is 1', () => {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('1234', 1));
    });

    it('should handle the edge case where alpha value is 0', () => {
      assert.equal('rgba(17, 34, 51, 0)', hexToRgba('1234', 0));
    });

    it('should calculate rgba values from hex with leading hash and string alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('#1234', '0.5'));
    });

    it('should calculate rgba values from hex with leading hash and numerical alpha value', () => {
      assert.equal('rgba(17, 34, 51, 0.75)', hexToRgba('#1234', 0.75));
    });
  });
});
