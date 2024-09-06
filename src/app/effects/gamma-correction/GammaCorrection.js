
const GammaCorrection = {

    values: {
        displayName: "Gamma Correction",
        gamma: {
            type: 'value-in-range',
            min: 0,
            max: 2,
            step: 0.001,
            current: 1,
        }
    },

    pixelFunction: function (pixel) {
        const gamma = this.values.gamma.current;
        pixel[0] = ((pixel[0] / 255) ** gamma) * 255
        pixel[1] = ((pixel[1] / 255) ** gamma) * 255
        pixel[2] = ((pixel[2] / 255) ** gamma) * 255
    },

    imageFunction: function (image) {
        for (let i = 0; i < image.pixels.length; i += 4) {
            const correctedPixel = [image.pixels[i + 0], image.pixels[i + 1], image.pixels[i + 2]]
            this.pixelFunction(correctedPixel)
            image.pixels[i + 0] = correctedPixel[0]
            image.pixels[i + 1] = correctedPixel[1]
            image.pixels[i + 2] = correctedPixel[2]
        }
        return image
    },
}


export default GammaCorrection