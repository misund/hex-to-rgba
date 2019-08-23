class RgbParseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RgbParseError';
  }
}

// The long expressions are just to catch errors
const RE_RGB = /^rgb\( *(?:(?:[01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]), *){2}(?:[01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]) *\)$/;
const RE_RGBA = /^rgba\( *(?:(?:[01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]), *){3}(?:(?:0\.)?\d+) *\)$/;
const RE_ALPHA = /(?:0\.)?\d+ *(?=\))/;
const RE_NO_ALPHA = /\)/;
const RE_IS_RGB = /^rgba?/;

const isRgb = str => RE_IS_RGB.test(str);

const rgbToRgba = (str, a) => {
  if (RE_RGB.test(str)) {
    const alpha = a !== undefined ? a : 1; // alpha, or default alpha
    return str.replace(RE_NO_ALPHA, `, ${alpha})`).replace(/rgb\(/, 'rgba(');
  }
  if (RE_RGBA.test(str)) {
    return a !== undefined ? str.replace(RE_ALPHA, `${a}`) : str; // replace alpha if defined, otherwise don't
  }
  throw new RgbParseError(
    `rgba? string is invalid, must be in the form rgba?('0-255', '0-255', '0-255', '0-1'?), not: ${str}`,
  );
};

module.exports = { isRgb, rgbToRgba, RgbParseError };
