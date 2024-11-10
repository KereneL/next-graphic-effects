import React from "react";
import LayerControls from "./LayerControls";
import ListItemHandle from "./ListItemHandle";

export default function EffectListItem({
  layer,
  provided,
  isSelected,
  handleLayerClick,
  onUpdateLayer,
}) {
  const onChangeHandler = (updatedValues) => {
    onUpdateLayer(layer.id, updatedValues);
  };

  const layerStyle = isSelected
    ? layer.schema.selectedStyle
    : layer.schema.idleStyle;

  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      onClick={handleLayerClick}
      style={{
        padding: '10px',
        margin: '5px 0',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '4px solid',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...provided.draggableProps.style,
        ...layerStyle,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ListItemHandle 
        provided={provided}
        handleColor={layerStyle.borderColor}
        />
        {layer.schema.title}
      </div>
      {isSelected && (
        <LayerControls selectedLayer={layer} onChange={onChangeHandler} />
      )}

      <span style={{ color: layerStyle.borderColor }}>▸</span>
    </li>
  );
}
