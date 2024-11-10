"use client";

import React from 'react';
import LayersPanel from "./LayersPanel";

export default function ToolPanel({ layerList, onBackgroundImageChange, onReorderLayers, onUpdateLayer }) {
  return (
    <div className="tool-panel" 
    style={{ 
      flexShrink: "0",
      flexBasis: "auto",
      margin: '0 0.5em 0 0',
      padding: '0.2em',
      backgroundColor: '#2980b9',
      borderRadius: '4px',
      border: '4px solid',
      borderColor: '#3498db',
      }}>

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
