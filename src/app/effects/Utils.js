
const utils = {
    srgbToLinear: function (s) {
        let l = (s <= 0.0404482362771082) ? (s / 12.92) : (((s + 0.055) / 1.055) ** gamma)
        return Math.max(0, Math.min(l, 1));
    },
    linearToSRGB: function (l) {
        let s = (l <= 0.00313066844250063) ? (l * 12.92) : 1.055 * (l ** (1 / gamma)) - 0.055
        return Math.max(0, Math.min(s, 1));
    },
    getRedLuminance: function (r) {
        return 0.2126 * r;
    },
    getGreenLuminance: function (g) {
        return 0.7152 * g;
    },
    getBlueLuminance: function (b) {
        return 0.0722 * b;
    },
    getLuminance: function (r, g, b) {
        let luminance =
            getRedLuminance(r) +
            getGreenLuminance(g) +
            getBlueLuminance(b);
        return luminance;
    }
}

export default utils