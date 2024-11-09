import React, { useRef } from 'react';

export default function ImageListItem({ onBackgroundImageChange }) {
  const inputRef = useRef(null);

  const handleBackgroundClick = () => {
    inputRef.current.click(); // Open the file input dialog
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onBackgroundImageChange(imageUrl); // Pass the image URL to the parent component
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      style={{
        padding: '10px',
        margin: '5px 0',
        backgroundColor: '#f39c12',
        color: '#000000',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '4px solid',
        borderColor: '#f1c40f',
        boxSizing: 'border-box',
      }}
    >
      {`🖼 Image...`}
      <input
        ref={inputRef}
        type='file'
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
    </div>
  );
}
