"use client";

import React from "react";

export default function LayerControls({ selectedLayer, onChange }) {
  const EffectComponent = selectedLayer.component;

  const handleValueChange = (updatedValues) => {
    onChange(updatedValues);
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "90%",
        border: "2px solid rgba(0, 0, 0, 0.75)",
        borderRadius: "4px",
        backgroundColor: "#f9f9f9",
        zIndex: "1000",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
        whiteSpace: "nowrap",
        color: "#000000",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        cursor: "default",
      }}
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
