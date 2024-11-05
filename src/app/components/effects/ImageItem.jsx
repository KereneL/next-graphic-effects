import React, { useRef } from "react";

export default function ImageItem({ onBackgroundImageSelect }) {
  const inputRef = useRef(null);

  const handleBackgroundClick = () => {
    inputRef.current.click(); // Open the file input dialog
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onBackgroundImageSelect(imageUrl); // Pass the image URL to the parent component
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      style={{
        padding: "10px",
        margin: "5px 0",
        backgroundColor: "#f8f9fa",
        color: "#000000",
        borderRadius: "4px",
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      {`🖼 Image...`}
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
