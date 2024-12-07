"use client";

import React from "react";

export default function LayerControls({ selectedLayer, onChange }) {
  const EffectComponent = selectedLayer.component;

  const handleValueChange = (updatedValues) => {
    onChange(updatedValues);
  };

  return (
    <div
      className="layer-controls"
      onClick={(e) => {
        e.stopPropagation(); // Prevent clicks from propagating
      }}
    >
      <EffectComponent
        values={selectedLayer.values}
        onChange={handleValueChange}
      />
    </div>
  );
}
