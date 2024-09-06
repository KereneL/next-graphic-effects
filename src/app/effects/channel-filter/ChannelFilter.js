const ChannelFilter = {

    values: {
        displayName: "Channel Filter",
        red: {
            type: 'toggle',
            state: true,
        },
        green: {
            type: 'toggle',
            state: true,
        },
        blue: {
            type: 'toggle',
            state: true,
        },
    },

    pixelFunction: function (pixel) {
        pixel[0] = this.values.red.state? pixel[0] : 0
        pixel[1] = this.values.green.state? pixel[1] : 0
        pixel[2] = this.values.blue.state? pixel[2] : 0
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