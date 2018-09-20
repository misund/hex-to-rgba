[![Build Status](https://travis-ci.org/misund/hex-to-rgba.svg?branch=master)](https://travis-ci.org/misund/hex-to-rgba)
[![Greenkeeper badge](https://badges.greenkeeper.io/misund/hex-to-rgba.svg)](https://greenkeeper.io/)


`hex-to-rgba` turns an old-fashioned css hex color value string into an rgba() string.

Optionally pass in an alpha value. The passed alpha value will override any alpha value from 4- or 8-digit hexes. If you don't pass in an alpha value at all, we will default to an alpha value of 1 (completely opaque).

Supports 3-, 4-, 6- and 8-digit hex values with or without a leading hash.

## Installation
```sh
$ npm install --save hex-to-rgba
```

## Usage
```js
var hexToRgba = require("hex-to-rgba");

hexToRgba('112233'); // "rgba(17, 34, 51, 1)"
hexToRgba('#112233'); // "rgba(17, 34, 51, 1)"
hexToRgba('112233', '0.5'); // "rgba(17, 34, 51, 0.5)"
hexToRgba('#112233', 0.75); // "rgba(17, 34, 51, 0.75)"

hexToRgba('11223344') // "rgba(17, 34, 51, 0.27)"
hexToRgba('#11223344') // "rgba(17, 34, 51, 0.27)"
hexToRgba('11223344', '0.5') // "rgba(17, 34, 51, 0.5)"
hexToRgba('#11223344', 0.75) // "rgba(17, 34, 51, 0.75)"

hexToRgba('123'); // "rgba(17, 34, 51, 1)"
hexToRgba('#123'); // "rgba(17, 34, 51, 1)"
hexToRgba('123', 0.2) // "rgba(17, 34, 51, 0.2)"
hexToRgba('#123', 0.2) // "rgba(17, 34, 51, 0.2)"

hexToRgba('1234'); // "rgba(17, 34, 51, 0.27)"
hexToRgba('#1234'); // "rgba(17, 34, 51, 0.27)"
hexToRgba('1234', 0.5) // "rgba(17, 34, 51, 0.5)"
hexToRgba('#1234', 0.75) // "rgba(17, 34, 51, 0.75)"
```

Testing
```
npm run build && npm test
```

## Signature
`hexToRgba(hex, a=1)`

## Parameters
* `hex`: The hex color value to convert to rgba. (examples: `'123456'`, `'#123456'`, `'123'`, `'#123'`)
* `a`: An alpha value to apply. (optional, default: 1) (examples: `'0.5'`, `0.25`)

## Returns
An rgba() string. (examples: `'rgba(11, 22, 33, 1)'`, `'rgba(11, 22, 33, 0.5)'`)

## Changelog
See the [releases page on GitHub](https://github.com/misund/hex-to-rgba/releases).
