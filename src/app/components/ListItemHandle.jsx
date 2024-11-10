"use client";

import React from "react";

export default function ListItemHandle({handleColor}) {
  return (
    <span
      className="list-item-handle"
      style={{
        paddingRight: "0.75em",
        fontSizeAdjust: "0.75",
        lineHeight: "0",
        color: handleColor,
      }}
    >
      ≡
    </span>
  );
}
