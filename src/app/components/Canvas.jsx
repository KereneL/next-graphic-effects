import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch = (p5) => {
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

    affectedImage = image.get();
    affectedImage.loadPixels();
    // APPLY EFFECTS HERE!
    //graphicEffects.GammaCorrection.imageFunction(affectedImage);
    //graphicEffects.Destaturate.imageFunction(affectedImage)
    //graphicEffects.BayerDither.imageFunction(affectedImage)
    affectedImage.updatePixels();
    p5.image(affectedImage, 0, 0);
    console.log("Done drawing!");
  };

  p5.updateEffect = (effect) => {
    if (image) {
      affectedImage = image.get();
      affectedImage.loadPixels();
      effect.imageFunction(affectedImage);  // Apply the effect with updated values
      affectedImage.updatePixels();
      p5.image(affectedImage, 0, 0);
    }
  };

  p5.draw = () => {
    // Only redraw when an update happens
  };
};

export default function Canvas({ backgroundImage, effect }) {
  return (
    <div style={{ flexGrow: 1 }} className="canvas-component">
      <NextReactP5Wrapper
        sketch={(p5) => {
          p5.backgroundImage = backgroundImage;
          sketch(p5);
          if (effect) {
            p5.updateEffect(effect); // Apply updated effect whenever it changes
          }
        }}
      />
    </div>
  );
}
