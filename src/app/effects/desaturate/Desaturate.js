import Utils from "../Utils"
import DesaturateComponent from "./component"

const Desaturate = {

    schema: {
        "title": "Desaturate",
    },

    component: DesaturateComponent,
    values:{
        toggle: false,
      },
    getLuminance: function (pixel) {

        return (
            Utils.getRedLuminance(pixel[0]) +
            Utils.getGreenLuminance(pixel[1]) +
            Utils.getBlueLuminance(pixel[2])
        )
    },

    imageFunction: function (image) {

        for (let i = 0; i < image.pixels.length; i += 4) {

            const pixel = [image.pixels[i + 0], image.pixels[i + 1], image.pixels[i + 2]]
            const luminance = this.getLuminance(pixel)

            image.pixels[i + 0] = luminance
            image.pixels[i + 1] = luminance
            image.pixels[i + 2] = luminance
        }

        return image
    }

}


export default Desaturate