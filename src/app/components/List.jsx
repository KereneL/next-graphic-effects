import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import EffectListItem from "./EffectListItem";
import ImageListItem from "./ImageListItem";

export default function List({ layerList, onBackgroundImageChange, onReorderLayers, onUpdateLayer }) {
  const [selectedLayerId, setSelectedLayerId] = useState(null);

  const handleLayerClick = (id) => {
    setSelectedLayerId(id === selectedLayerId ? null : id);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedLayers = Array.from(layerList);
    const [movedLayer] = reorderedLayers.splice(result.source.index, 1);
    reorderedLayers.splice(result.destination.index, 0, movedLayer);
    onReorderLayers(reorderedLayers);
  };

  const handleBackgroundImageChange = (imageUrl) => {
    onBackgroundImageChange(imageUrl);
  };

  return (
    <>
      <ImageListItem onBackgroundImageChange={handleBackgroundImageChange} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="layers">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} style={{ listStyleType: 'none', padding: '0' }}>
              {layerList.map((layer, index) => (
                <Draggable key={layer.id} draggableId={layer.draggableId} index={index}>
                  {(provided) => (
                    <EffectListItem
                      layer={layer}
                      provided={provided}
                      isSelected={selectedLayerId === layer.id}
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
}
