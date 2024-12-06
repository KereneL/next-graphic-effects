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
      {...provided.draggableProps}
      onClick={handleLayerClick}
      style={{
        padding: "10px",
        margin: "5px 0",
        cursor: "pointer",
        borderRadius: "4px",
        border: "4px solid",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
