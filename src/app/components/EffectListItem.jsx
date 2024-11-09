import React from 'react';
import LayerControls from './LayerControls';

export default function EffectListItem({ layer, provided, isSelected, handleLayerClick, onUpdateLayer }) {

  function onChangeHandler (updatedLayer){   
      onUpdateLayer(updatedLayer); // Notify parent of the update
  }

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
        backgroundColor: isSelected ? '#007bff' : '#f8f9fa',
        color: isSelected ? '#ffffff' : '#000000',
        borderRadius: '4px',
        userSelect: 'none',
        ...provided.draggableProps.style,
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
