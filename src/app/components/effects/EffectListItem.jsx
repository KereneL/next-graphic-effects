import React, { useState } from 'react';
import ItemForm from './LayerControls';

export default function ListItem ({ layer, provided, selectedLayerId, handleLayerClick, onUpdateLayer }) {
    const isSelected = selectedLayerId === layer.id;
    const [layerValues, setLayerValues] = useState(layer.values);

    const handleValuesChange = (updatedValues) => {
        console.log("handleValuesChange")
        setLayerValues(updatedValues);  // Update local state
        onUpdateLayer(layer.id, updatedValues);  // Pass updated values to parent component
    };

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
                <ItemForm
                    selectedLayer={layer}
                    onChange={handleValuesChange}
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '100%',
                        marginLeft: '10px',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        backgroundColor: '#f9f9f9',
                        zIndex: '1000',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        whiteSpace: 'nowrap',
                        color: '#000000'
                    }}
                />
            )}
        </li>
    );
};