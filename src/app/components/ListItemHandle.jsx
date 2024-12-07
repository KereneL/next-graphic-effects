"use client";

import React from "react";

export default function ListItemHandle({ handleColor, provided }) {
  return (
    <div
      className="list-item-handle"
      style={{ color: handleColor }}
      {...provided.dragHandleProps}
    >
      ≡
    </div>
  );
}
