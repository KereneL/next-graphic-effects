"use client";

import React from "react";
import LayersPanel from "./LayersPanel";

export default function ToolPanel({ effects, onBackgroundImageChange }) {
  return (
    <div className="tool-panel" style={{ flexShrink: 0, flexBasis: "auto" }}>
      <LayersPanel
        effects={effects}
        onBackgroundImageChange={onBackgroundImageChange}
      />
      
      <p>some text, ok?</p>
    </div>
  );
}
