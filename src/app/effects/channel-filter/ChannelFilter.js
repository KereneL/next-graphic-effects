
import ChannelFilterComponent from "./component"

const ChannelFilter = {

    schema: {
        "title": "Channel Filter",
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
        red: true,
        green: true,
        blue: true,
    },

    component: ChannelFilterComponent,

    pixelFunction: function (pixel) {
        pixel[0] = this.values.red? pixel[0] : 0
        pixel[1] = this.values.green? pixel[1] : 0
        pixel[2] = this.values.blue? pixel[2] : 0
        return pixel
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
    }
}


export default ChannelFilter