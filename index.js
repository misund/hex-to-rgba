/**
 * Turns an old-fashioned css hex color value into a rgb color value.
 *
 * If you specify an alpha value, you'll get a rgba() value instead.
 *
 * @param The hex value to convert. ('123456'. '#123456', ''123', '#123')
 * @param An alpha value to apply. (optional) ('0.5', '0.25')
 * @return An rgb or rgba value. ('rgb(11, 22, 33)'. 'rgba(11, 22, 33, 0.5)')
 */
const hexToRgba = (hex, a = '') => {
  const fixHex = (hex) => {
    let newHex = hex.startsWith('#') ? hex.slice(1) : hex;

    if (newHex.length === 3) {
      newHex = `${newHex.slice(0, 1)}${newHex.slice(0, 1)}${newHex.slice(1, 2)}${newHex.slice(1, 2)}${newHex.slice(2, 3)}${newHex.slice(2, 3)}`;
    }

    return newHex;
  };

  const r = parseInt((fixHex(hex)).substring(0, 2), 16);
  const g = parseInt((fixHex(hex)).substring(2, 4), 16);
  const b = parseInt((fixHex(hex)).substring(4, 6), 16);

  const rgba = a ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;

  return rgba;
};

module.exports = hexToRgba;
