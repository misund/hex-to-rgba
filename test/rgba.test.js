/* global describe it */
import assert from 'assert';
import hexToRgba from '..';

describe('rgba?-to-rgba', () => {
  describe('parseRgba option', () => {
    it('should parse rgba strings when set to true', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('rgba(17, 34, 51, 1)', '0.5', true));
    });

    it('should parse rgb strings when set to true', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('rgb(17, 34, 51)', '0.5', true));
    });
  });

  describe('rgb parser', () => {
    it('should throw when given an alpha channel', () => {
      const callback = () => hexToRgba('rgb(17, 34, 51, 1)', undefined, true);
      assert.throws(callback, Error); // RgbParseError doesn't pass, even though it throws
    });

    it('should default to 1 for alpha if no alpha is given', () => {
      assert.equal('rgba(17, 34, 51, 1)', hexToRgba('rgb(17, 34, 51)', undefined, true));
    });
  });

  describe('rgba parser', () => {
    it('should throw when not given an alpha channel', () => {
      const callback = () => hexToRgba('rgba(17, 34, 51)', undefined, true);
      assert.throws(callback, Error); // RgbParseError doesn't pass, even though it throws
    });

    it('should leave the alpha channel untouched if no alpha is given', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('rgba(17, 34, 51, 0.5)', undefined, true));
    });
  });
});
