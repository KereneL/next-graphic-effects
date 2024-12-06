import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import EffectListItem from "./EffectListItem";
import ImageListItem from "./ImageListItem";
import { useP5Context } from "./P5Context";

export default function List() {
  const { sketchProps, changeSketchProps } = useP5Context();
  const [layerList, setLayerList] = useState(sketchProps.layerList);
  const [selectedLayerId, setSelectedLayerId] = useState(null);

  const handleLayerClick = (id) => {
    setSelectedLayerId(id === selectedLayerId ? null : id);
  };

  const handleLayerChange = (updatedLayer) => {
    const updatedLayerList = layerList.map((layer) =>
      layer.id === updatedLayer.id ? updatedLayer : layer
    );
    setLayerList(updatedLayerList);
    changeSketchProps({ layerList: updatedLayerList });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedLayers = Array.from(layerList);
    const [movedLayer] = reorderedLayers.splice(result.source.index, 1);
    reorderedLayers.splice(result.destination.index, 0, movedLayer);
    setLayerList(reorderedLayers);
    changeSketchProps({ layerList: reorderedLayers });
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="layers">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyleType: "none", padding: "0" }}
            >
              <ImageListItem />
              {layerList.map((layer, index) => (
                <Draggable
                  key={layer.id}
                  draggableId={layer.draggableId}
                  index={index}
                >
                  {(provided) => (
                    <EffectListItem
                      layer={layer}
                      provided={provided}
                      isSelected={selectedLayerId === layer.id}
                      handleLayerClick={() => handleLayerClick(layer.id)}
                      onLayerChange={handleLayerChange}
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
