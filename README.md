[![Build Status](https://travis-ci.org/misund/hex-to-rgba.svg?branch=master)](https://travis-ci.org/misund/hex-to-rgba)

`hex-to-rgba` turns an old-fashioned css hex color value string into an rgb() string.

If you specify an alpha value, you'll get a rgba() string instead.

## Install
```sh
$ npm install --save hex-to-rgba
```
## Usage
```js
var hexToRgba = require("hex-to-rgba");

hexToRgba('112233'); // "rgb(17, 34, 51)"
hexToRgba('#112233'); // "rgb(17, 34, 51)"
hexToRgba('112233', '0.5'); // "rgba(17, 34, 51, 0.5)"
hexToRgba('#112233', 0.75); // "rgba(17, 34, 51, 0.75)"

hexToRgba('123'); // "rgb(17, 34, 51)"
hexToRgba('#123'); // "rgb(17, 34, 51)"
hexToRgba('123', 0.2) // "rgba(17, 34, 51, 0.2)"
hexToRgba('#123', 0.2) // "rgba(17, 34, 51, 0.2)"

hexToRgba('11223344') // "rgba(17, 34, 51, 0.27)"
hexToRgba('#11223344') // "rgba(17, 34, 51, 0.27)"
hexToRgba('11223344', '0.5') // "rgba(17, 34, 51, 0.5)"
hexToRgba('#11223344', 0.75) // "rgba(17, 34, 51, 0.75)"
```

## Signature
`hexToRgba(hex, a)`

## Parameters
* `hex`: The hex value to convert. (examples: `'123456'`, `'#123456'`, `'123'`, `'#123'`)
* `a`: An alpha value to apply. (optional) (examples: `'0.5'`, `0.25`)

## Returns
An rgb or rgba value. (examples: `'rgb(11, 22, 33)'`, `'rgba(11, 22, 33, 0.5)'`)
