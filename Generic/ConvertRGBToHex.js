// implement a function that converts the RGB number to HEXA color codes
// input 255, 51, 255
// output "ff33ff"

// using toString() method
const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// console.log(rgbToHex(255, 51, 255));

// using left shift (<<) operator
const rgb2Hex = (r, g, b) => {
    const hexVal = (r << 16) | (g << 8) | b;
    const hexStr = hexVal.toString(16).toLowerCase();

    while (hexStr.length < 6) {
        hexStr = '0' + hexStr;
    }

    return '#' + hexStr;
}

// console.log(rgb2Hex(255, 51, 255));

// using Array.map()
const rgbTooHex = (r, g, b) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
console.log(rgbTooHex(255, 51, 255));