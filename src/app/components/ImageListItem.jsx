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
      style={{
        padding: "10px",
        margin: "5px 0",
        backgroundColor: "#cbd3da",
        color: "#000",
        cursor: "pointer",
        borderRadius: "4px",
        border: "4px solid",
        borderColor: "#3d4a56",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
