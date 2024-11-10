import GammaCorrectionComponent from "./component"

const GammaCorrection = {

    schema: {
        "title": "Gamma Correction",
        "idleStyle": {
            backgroundColor: '#FFAEBC',
            color: '#000000',
            borderColor: '#3d4a56',
            boxSizing: 'border-box',
        },
        "selectedStyle": {
            backgroundColor: '#FFAEBC',
            color: '#ff163e',
            borderColor: '#ff627d',
            boxSizing: 'border-box',
        }
      },

    values: {
        gamma: 1
    },

    component: GammaCorrectionComponent,

    pixelFunction: function (pixel) {
        const gamma = this.values.gamma.current;
        pixel[0] = ((pixel[0] / 255) ** this.values.gamma) * 255
        pixel[1] = ((pixel[1] / 255) ** this.values.gamma) * 255
        pixel[2] = ((pixel[2] / 255) ** this.values.gamma) * 255
    },

    imageFunction: function ({image}) {
       
        image.loadPixels();
        for (let i = 0; i < image.pixels.length; i += 4) {
            const correctedPixel = [image.pixels[i + 0], image.pixels[i + 1], image.pixels[i + 2]]
            this.pixelFunction(correctedPixel)
            image.pixels[i + 0] = correctedPixel[0]
            image.pixels[i + 1] = correctedPixel[1]
            image.pixels[i + 2] = correctedPixel[2]
        }
        image.updatePixels();

        return image
    },
}

export default GammaCorrection