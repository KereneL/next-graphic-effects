"use client";

import React from "react";
import LayersPanel from "./LayersPanel";

export default function ToolPanel() {
  return (
    <div
      className="tool-panel"
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "0 0 0 0",
        padding: "0.5em",
      }}
    >
      {/*<p>some top text here maybe</p>*/}
      <LayersPanel />
    </div>
  );
}
