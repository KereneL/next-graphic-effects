import React from "react";
import List from "./List";

export default function LayersPanel() {
  return (
    <div
      className="layers-panel"
      style={{
        minWidth: "128px",
        maxWidth: "300px",
        margin: "0.2em",
        padding: "0.2em",
        height: "100%",
        boxSizing: "border-box",
        width: "300px",
        position: "relative",
        overflow: "visible",

        backgroundColor: "#2980b9",
        borderRadius: "4px",
        border: "4px solid",
        borderColor: "#3498db",
      }}
    >
      <List />
    </div>
  );
}
