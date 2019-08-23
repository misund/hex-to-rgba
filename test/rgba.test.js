/* global describe it */
import assert from 'assert';
import hexToRgba from '..';

describe('rgba?-to-rgba', () => {
  describe('parse rgba option', () => {
    it('should parse rgba strings when set to true', () => {
      assert.equal(true, hexToRgba('rgba(17, 34, 51, 1)', undefined, true));
    });
  });
});
