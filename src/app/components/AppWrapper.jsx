import React, { useState } from "react";
import Canvas from "./Canvas";
import ToolPanel from "./ToolPanel";
import { getEffectsArr } from "../effects/Effects";

export default function AppWrapper() {
  const layerTypes = getEffectsArr();
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [layerList, setLayerList] = useState([
    {
      ...layerTypes[0],
      id: 0,
      draggableId: `${layerTypes[0].schema.title}_0`,
      name: layerTypes[0].schema.title,
      values: { ...layerTypes[0].values },
    },
    {
      ...layerTypes[1],
      id: 1,
      draggableId: `${layerTypes[1].schema.title}_0`,
      name: layerTypes[1].schema.title,
      values: { ...layerTypes[1].values },
    },
    {
      ...layerTypes[2],
      id: 2,
      draggableId: `${layerTypes[2].schema.title}_0`,
      name: layerTypes[2].schema.title,
      values: { ...layerTypes[2].values },
    },
    {
      ...layerTypes[3],
      id: 3,
      draggableId: `${layerTypes[3].schema.title}_0`,
      name: layerTypes[3].schema.title,
      values: { ...layerTypes[3].values },
    },
  ]);

  const addNewLayer = (layerType) => {
    const newLayer = {
      ...layerType,
      id: layerList.length,
      draggableId: layerType.schema.title + "_" + layerList.length,
      name: layerType.schema.title,
      values: layerType.values,
    };
    setLayerList((prevList) => [...prevList, newLayer]);
  };

  const handleSetBackgroundImage = (newImage) => {
    setBackgroundImage(newImage);
  };

  const handleReorderLayers = (newOrder) => {
    setLayerList(newOrder);
  };

  const handleUpdateLayer = (updatedLayerId, updatedValues) => {
    setLayerList((prevList) =>
      prevList.map((layer) =>
        layer.id === updatedLayerId
          ? { ...layer, values: updatedValues }
          : layer
      )
    );
  };

  return (
    <>
      <ToolPanel
        layerList={layerList}
        layerTypes={layerTypes}
        onAddLayer={addNewLayer}
        onBackgroundImageChange={handleSetBackgroundImage}
        onUpdateLayer={handleUpdateLayer}
        onReorderLayers={handleReorderLayers}
      />

      <Canvas layerList={layerList} backgroundImage={backgroundImage} />
    </>
  );
}
