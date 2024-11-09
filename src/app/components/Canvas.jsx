import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import p5Sketch from './p5Sketch'

export default function Canvas({ layerList, backgroundImage}) {
  return (
    <div style={{ flexGrow: 1 }} className="canvas-component-div">
      <NextReactP5Wrapper
        sketch={(p5FromWrapper) => {
          Object.assign(p5FromWrapper,{layerList, backgroundImage})
          p5Sketch(p5FromWrapper);
        }}
      />
    </div>
  );
}
