import getMatrices from "./BayerMatrices";

const BayerDither = {
  values: {
    displayName: "Bayer Dithering",
    nValue: {
      type: 'selection',
      options: [
        ["n=2",2],
        ["n=4",4],
        ["n=8",8]
      ],
      current: 2
    },
    spread: {
      type: 'value-in-range',
      min: 0,
      max: 1,
      step: 0.001,
      current: 0.5
    },
    matrices: getMatrices(),

  },
  channelFunction: function (channelValue, mValue) {
    const { nValue: {current: nValue}, spread:{current: spread} } = this.values;
    let newChannelValue = channelValue / 255

    newChannelValue += spread * mValue;
    newChannelValue = Math.floor(newChannelValue * (nValue - 1) + 0.5) / (nValue - 1);

    return newChannelValue;
  },

  pixelFunction: function (pixel, mValue) {
    pixel[0] = this.channelFunction(pixel[0], mValue) * 255
    pixel[1] = this.channelFunction(pixel[1], mValue) * 255
    pixel[2] = this.channelFunction(pixel[2], mValue) * 255
    return pixel
  },

  imageFunction: function (image) {
    const {  nValue: {current: nValue}, matrices } = this.values;
    const nSquared = nValue ** 2;
    const imgWidth = image.width;
    const normalizedMatrix = matrices.get(nValue)
    .map(val => {
      return (val / nSquared) - .05
    })

    for (let i = 0; i < image.pixels.length; i += 4) {
      const imageX = (i / 4) % imgWidth;
      const imageY = Math.floor((i / 4) / imgWidth);

      const bayerMatrixY = Math.floor(imageY % nValue);
      const bayerMatrixX = Math.floor(imageX % nValue);

      const mValue = normalizedMatrix[bayerMatrixX + bayerMatrixY * nValue];
      const correctedPixel = [image.pixels[i + 0], image.pixels[i + 1], image.pixels[i + 2]];

      this.pixelFunction(correctedPixel, mValue);

      image.pixels[i + 0] = correctedPixel[0];
      image.pixels[i + 1] = correctedPixel[1];
      image.pixels[i + 2] = correctedPixel[2];
    }

    return image;
  },
}


export default BayerDither;