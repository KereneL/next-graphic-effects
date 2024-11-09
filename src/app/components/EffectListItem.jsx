import React from 'react';
import LayerControls from "./LayerControls";

export default function EffectListItem({ layer, provided, isSelected, handleLayerClick, onUpdateLayer }) {
  const onChangeHandler = (updatedValues) => {   
    onUpdateLayer(layer.id, updatedValues);
  };

  const layerStyle = (isSelected)? layer.schema.selectedStyle:layer.schema.idleStyle;
  console.log(layer)

  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      onClick={handleLayerClick}
      style={{
        padding: '10px',
        margin: '5px 0',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '4px solid',
        boxSizing: 'border-box',
        ...provided.draggableProps.style,
        ...layerStyle,
      }}
    >
      {layer.schema.title}
      {isSelected && (
        <LayerControls
          selectedLayer={layer}
          onChange={onChangeHandler}
        />
      )}
    </li>
  );
}
