"use client"

import React, { useRef } from "react";
import { useP5Context } from "./P5Context";

export default function ImageListItem() {
  const { loadSketchImage } = useP5Context();
  const inputRef = useRef();

  const handleBackgroundClick = () => {
    inputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      loadSketchImage(imageUrl);
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="layer-list-item"
      style={{
        backgroundColor: "#cbd3da",
        color: "#000",
        cursor: "pointer",
        borderColor: "#3d4a56",
      }}
    >
      <div>
        <span style={{ paddingInlineEnd: "0.75em" }}>🖼</span>
        <span>Image</span>
      </div>
      <span>…</span>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>
  );
}
