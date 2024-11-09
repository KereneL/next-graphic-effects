const p5Sketch = (p5) => {
  let image;
  let affectedImage;

  p5.preload = () => {
    if (p5.backgroundImage) {
      image = p5.loadImage(p5.backgroundImage); // Load the dynamic image
    } else {
      image = p5.loadImage('/ostrich.jpg'); // Default image
    }
  };

  p5.setup = () => {
    const imgWidth = image.width;
    const imgHeight = image.height;

    p5.createCanvas(imgWidth, imgHeight, p5.WEBGL).imageSmoothingEnabled = false;
    p5.background(255);
    p5.imageMode(p5.CENTER);
    p5.noLoop(); // Disable continuous drawing unless necessary

    p5.customDraw()
  };

  p5.customDraw = () => {
    if (!image) return

    affectedImage = image.get();
    affectedImage.loadPixels();

    /* Loop over effects functions */
    //console.clear()
    console.log(`Layers:`)
    p5.layerList.forEach((layer, index) => {
      console.log(index, layer.name)
    });

    affectedImage.updatePixels();
    p5.image(affectedImage, 0, 0);
  };
};

export default p5Sketch;