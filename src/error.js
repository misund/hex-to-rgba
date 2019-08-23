class RgbParseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RgbParseError';
  }
}

module.exports = { RgbParseError };
