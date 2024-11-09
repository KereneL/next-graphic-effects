import Utils from "../Utils"
import DesaturateComponent from "./component"

const Desaturate = {

    schema: {
        "title": "Desaturate",
        "idleStyle": {
            backgroundColor: '#cbd3da',
            color: '#000000',
            borderColor: '#3d4a56',
            boxSizing: 'border-box',
        },
        "selectedStyle": {
            backgroundColor: '#e74c3c',
            color: '#f1c40f',
            borderColor: '#c0392b',
            boxSizing: 'border-box',
        }
    },

    values: {
        toggle: false,
    },
    
    component: DesaturateComponent,

    getLuminance: function (pixel) {

        return (
            Utils.getRedLuminance(pixel[0]) +
            Utils.getGreenLuminance(pixel[1]) +
            Utils.getBlueLuminance(pixel[2])
        )
    },

    imageFunction: function (image) {

        if (!this.values.toggle) return image;

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