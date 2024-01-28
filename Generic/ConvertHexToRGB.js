// implement a function that converts the HEXA color codes to RGB nos.
// input "ff33ff"
// output {"r": 255, "g": 51, "b": 255}

const hexToRGB = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
}

console.log(hexToRGB("#ff33ff"));