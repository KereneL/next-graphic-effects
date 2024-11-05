import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import EffectListItem from './EffectListItem';
import ImageListItem from './ImageItem';

export default function List ({ effects, onBackgroundImageChange }){
    const [layers, setLayers] = useState(
        effects.map((effect, index) => ({
            ...effect,
            id: index.toString(),
            isMovable: true,
            name: effect.values.displayName,
        }))
    );

    const [selectedLayerId, setSelectedLayerId] = useState(null);

    // This function updates the layer values
    const onUpdateLayer = (id, updatedValues) => {
        setLayers(layers.map(layer => (layer.id === id ? { ...layer, values: updatedValues } : layer)));
    };

    const handleLayerClick = (id) => {
        setSelectedLayerId(id === selectedLayerId ? null : id);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const reorderedLayers = Array.from(layers);
        const [movedLayer] = reorderedLayers.splice(result.source.index, 1);
        reorderedLayers.splice(result.destination.index, 0, movedLayer);
        setLayers(reorderedLayers);
    };

    const handleBackgroundImageSelect = (imageUrl) => {
        onBackgroundImageChange(imageUrl);
    };

    return (
        <>
            <ImageListItem onBackgroundImageSelect={handleBackgroundImageSelect} />
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="layers">
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef} style={{ listStyleType: 'none', padding: 0 }}>
                            {layers.map((layer, index) => (
                                <Draggable key={layer.id} draggableId={layer.id} index={index}>
                                    {(provided) => (
                                        <EffectListItem
                                            layer={layer}
                                            provided={provided}
                                            selectedLayerId={selectedLayerId}
                                            handleLayerClick={() => handleLayerClick(layer.id)}
                                            onUpdateLayer={onUpdateLayer}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    );
};