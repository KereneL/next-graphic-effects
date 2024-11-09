"use client";

import React from "react";
import LayersPanel from "./LayersPanel";

export default function ToolPanel({ layerList, onBackgroundImageChange, onReorderLayers, onUpdateLayer }) {
  return (
    <div className="tool-panel" style={{ flexShrink: 0, flexBasis: "auto" }}>
      <LayersPanel
        layerList={layerList}
        onBackgroundImageChange={onBackgroundImageChange}
        onReorderLayers={onReorderLayers}
        onUpdateLayer={onUpdateLayer}
      />

      {/*<p>some bottom text here</p>*/}
    </div>
  );
}
