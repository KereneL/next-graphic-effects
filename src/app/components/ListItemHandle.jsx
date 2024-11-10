"use client";

import React from "react";

export default function ListItemHandle({handleColor, provided}) {
  return (
    <div
      className="list-item-handle"
      style={{
        paddingRight: "0.75em",
        fontSizeAdjust: "0.75",
        lineHeight: "0",
        color: handleColor,
      }}
      {...provided.dragHandleProps}
    >
      ≡
    </div>
  );
}
