"use client";

import React from "react";
import { useP5Context } from "./P5Context";

const P5Canvas = () => {
  const { parentRef, isInitialized } = useP5Context();

  return (
    <div
      ref={parentRef}
      className="p5-container"
      style={{
        background: isInitialized ? "transparent" : "#555555",
        color: "#ffffff",
      }}
    >
      {!isInitialized && <p>Loading canvas...</p>}
    </div>
  );
};

export default P5Canvas;
