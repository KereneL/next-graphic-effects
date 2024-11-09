"use client";

import React from 'react';

export default function LayerControls({ selectedLayer, onChange }) {
  const EffectComponent = selectedLayer.component; // Correctly access the component

  return (
    <div
      style={{
        position: 'absolute',
        left: '200px',
        marginLeft: '10px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
        zIndex: '1000',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        whiteSpace: 'nowrap',
        color: '#000000',
        display: 'flex', // Apply flexbox
        flexDirection: 'column', // Arrange items in a column
        gap: '10px', // Optional: Add space between items
        cursor: 'default'
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <EffectComponent values={selectedLayer.values} onChange={onChange} />
    </div>
  );
}
