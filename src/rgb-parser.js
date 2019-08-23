import { RgbParseError } from './error';

const RE_RGB = /^rgb\(\d{1,3}, *\d{1,3}, *\d{1,3}\)$/;
const RE_RGBA = /^rgba\(\d{1,3}, *\d{1,3}, *\d{1,3}(?:, *(?:\d\.)?\d+)\)$/;
const RE_ALPHA = /(?:0\.)?\d+ *(?=\))/;
const RE_NO_ALPHA = /\)/;

module.exports = (str, a) => {
  if (RE_RGB.test(str)) {
    const alpha = a !== undefined ? a : 1; // alpha, or default alpha
    return str.replace(RE_NO_ALPHA, `, ${alpha})`).replace(/rgb\(/, 'rgba(');
  }
  if (RE_RGBA.test(str)) {
    return a !== undefined ? str.replace(RE_ALPHA, `${a}`) : str; // replace alpha if defined, otherwise don't
  }
  throw new RgbParseError(`rgba? string is invalid, must be in the form rgba?(num, num, num, num?), not: ${str}`);
};
