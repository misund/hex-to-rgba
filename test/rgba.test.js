/* global describe it */
import assert from 'assert';
import hexToRgba from '..';

describe('rgba?-to-rgba', () => {
  describe('parse rgba option', () => {
    it('should parse rgba strings when set to true', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('rgba(17, 34, 51, 1)', '0.5', true));
    });

    it('should parse rgb strings when set to true', () => {
      assert.equal('rgba(17, 34, 51, 0.5)', hexToRgba('rgb(17, 34, 51)', '0.5', true));
    });
  });
});
