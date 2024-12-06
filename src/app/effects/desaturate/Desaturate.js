import Utils from "../Utils"
import DesaturateComponent from "./component"

const Desaturate = {

    schema: {
        "title": "Desaturate",
        "idleStyle": {
            backgroundColor: '#B4F8C8',
            color: '#000000',
            borderColor: '#3d4a56',
        },
        "selectedStyle": {
            backgroundColor: '#B4F8C8',
            color: '#0b6e29',
            borderColor: '#12B442',
        }
    },

    enabled: false,

    component: DesaturateComponent,

    getLuminance: function (pixel) {

        return (
            Utils.getRedLuminance(pixel[0]) +
            Utils.getGreenLuminance(pixel[1]) +
            Utils.getBlueLuminance(pixel[2])
        );
    },

    imageFunction: function ({ image }) {
        image.loadPixels();
        for (let i = 0; i < image.pixels.length; i += 4) {

            const pixel = [image.pixels[i + 0], image.pixels[i + 1], image.pixels[i + 2]];
            const luminance = this.getLuminance(pixel);

            image.pixels[i + 0] = luminance;
            image.pixels[i + 1] = luminance;
            image.pixels[i + 2] = luminance;
        }
        image.updatePixels();

        return image;
    }

}


export default Desaturate