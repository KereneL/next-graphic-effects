"use client"

import React from "react";
import LayerControls from "./LayerControls";
import ListItemHandle from "./ListItemHandle";

export default function EffectListItem({
  layer,
  provided,
  isSelected,
  handleLayerClick,
  onLayerChange,
}) {
  const layerStyle = isSelected
    ? layer.schema.selectedStyle
    : layer.schema.idleStyle;

  const onChangeHandler = (updatedValues) => {
    const updatedLayer = { ...layer, values: updatedValues };
    onLayerChange(updatedLayer);
  };

  const onEnablerHandler = () => {
    const newToggleState = !layer.enabled;
    const updatedLayer = { ...layer, enabled: newToggleState };
    onLayerChange(updatedLayer);
  };
  return (
    <li
      ref={provided.innerRef}
      key={layer.id}
      {...provided.draggableProps}
      onClick={handleLayerClick}
      className="layer-list-item"
      style={{
        ...provided.draggableProps.style,
        ...layerStyle,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <ListItemHandle
          provided={provided}
          handleColor={layerStyle.borderColor}
        />
        {layer.schema.title}
      </div>

      <div
        style={{
          color: layerStyle.borderColor,
          fontSizeAdjust: "0.75",
          lineHeight: "0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          style={{ margin: "0 1em" }}
          checked={layer.enabled}
          onChange={onEnablerHandler}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        ▸
      </div>

      {isSelected && (
        <LayerControls selectedLayer={layer} onChange={onChangeHandler} />
      )}
    </li>
  );
}
