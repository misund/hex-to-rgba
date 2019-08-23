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

    it('should accept all valid rgb values', () => {
      for (let i = 0; i <= 255; i++) { // eslint-disable-line no-plusplus
        const result = hexToRgba(`rgb(${i}, ${i}, ${i})`, '1', true);
        assert.equal(result, `rgba(${i}, ${i}, ${i}, 1)`);
      }
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

    it('should accept all valid rgb values', () => {
      for (let i = 0; i <= 255; i++) { // eslint-disable-line no-plusplus
        const result = hexToRgba(`rgba(${i}, ${i}, ${i}, 1)`, '1', true);
        assert.equal(result, `rgba(${i}, ${i}, ${i}, 1)`);
      }
    });

    it('should accept at least all rgb-alpha values from 0.001 to 1, when a is undefined', () => {
      for (let i = 0.001; i <= 1; i += 0.001) {
        const result = hexToRgba(`rgba(0, 0, 0, ${i})`, undefined, true);
        assert.equal(result, `rgba(0, 0, 0, ${i})`);
      }
    });

    it('should accept a mix of valid rgb and alpha values, when a is undefined', () => {
      for (let i = 0; i <= 255; i++) { // eslint-disable-line no-plusplus
        const result = hexToRgba(`rgba(${i}, ${i}, ${i}, ${i * 0.00392156862745098})`, undefined, true);
        assert.equal(result, `rgba(${i}, ${i}, ${i}, ${i * 0.00392156862745098})`);
      }
    });

    ['-1', '-2', '-100', '256', '257', '1000'].forEach((val) => {
      describe(`given the invalid rgb value: ${val}`, () => {
        [
          `rgba(${val}, 0, 0, 1)`,
          `rgba(0, ${val}, 0, 1)`,
          `rgba(0, 0, ${val}, 1)`,
          `rgba(0, ${val}, ${val}, 1)`,
          `rgba(${val}, ${val}, 0, 1)`,
          `rgba(${val}, ${val}, ${val}, 1)`,
        ].forEach((rgbaStr) => {
          it(`should throw for: ${rgbaStr}`, () => {
            const callback = () => hexToRgba(rgbaStr, undefined, true);
            assert.throws(callback, Error); // RgbParseError doesn't pass, even though it throws
          });
        });
      });
    });
  });
});
