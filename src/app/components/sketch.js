const sketch = (p5, parentRef, initProps) => {
  let canvasWidth = 100;
  let canvasHeight = 100;
  let canvasRef = null;
  let image = null;
  let props = {
    layerList: []
  }

  const iterateLayers = (ogImage, layers) => {
    // console.log("iterateLayers");
    let affectedImage = ogImage.get()
    layers.forEach((layer, index) => {
      // console.log(`layer ${index}: ${layer.name}`, layer.values)
      if (layer && layer.enabled && layer.imageFunction) {
        affectedImage = layer.imageFunction({ p5, "image": affectedImage })
      }
      // else console.log(`layer unsuccessful 👎🏻`)
    });
    return affectedImage;
  };

  p5.customLoadImage = (url) => {
    const successCallback = (loadedImg) => {
      console.log(`Image loaded successfully: '${url}':`, loadedImg);
      image = loadedImg;
      p5.fitCavasSizeToImage();
    };
    const errorCallback = (error) => {
      console.error(`Failed to load image: '${url}':`, error);
    };
    p5.loadImage(url, successCallback, errorCallback);
  };

  p5.preload = () => {
    // console.log("p5.preload");
    p5.loadImage(initProps.initImgUrl, (loadedImg) => {
      image = loadedImg
      canvasWidth = loadedImg.width
      canvasHeight = loadedImg.height
    });
    delete initProps.initImgUrl
  };

  p5.setup = () => {
    // console.log("p5.setup");
    p5.updateProps({ ...initProps })
    canvasRef = p5.createCanvas(canvasWidth, canvasHeight);
    canvasRef.imageSmoothingEnabled = false;
    canvasRef.parent(parentRef);

    p5.imageMode(p5.CENTER);
    p5.noLoop();

    p5.customDraw();
  };

  p5.fitCavasSizeToImage = () => {
    // console.log("p5.fitCavasSizeToImage");
    p5.changeCanvasSize({ width: image.width, height: image.height })
  };

  p5.changeCanvasSize = (canvasSize) => {
    // console.log("p5.changeCanvasSize");
    canvasWidth = canvasSize.width || canvasWidth;
    canvasHeight = canvasSize.height || canvasHeight;
    p5.resizeCanvas(canvasWidth, canvasHeight);
    p5.customDraw();
  };

  p5.updateProps = (newProps) => {
    // console.log("p5.updateProps");
    props = Object.assign(props, newProps)
    p5.customDraw();
  };

  p5.customDraw = () => {
    // console.log("p5.customDraw");
    if (!image) return;
    let affectedImage = iterateLayers(image.get(), props.layerList);
    p5.clear();
    p5.image(affectedImage, canvasWidth / 2, canvasHeight / 2);
  };
};

export { sketch };