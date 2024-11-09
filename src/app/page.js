"use client"
import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ToolPanel from './components/ToolPanel';
import { getEffectsArr } from './effects/Effects';

export default function Home() {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const layerTypes = getEffectsArr();

    const [layerList, setLayerList] = useState(
        /* Seed with all effects types possible */
        layerTypes.map((type, index) => ({
          ...type,
          id: index.toString(),
          "name": type.schema.title,
        }))
    );
    const handleSetBackgroundImage = (newImage) => {
        setBackgroundImage(newImage)
    };
    const handleReorderLayers = (newOrder) => {
        setLayerList(newOrder);
    };
    const handleUpdateLayer = (newList) => {
        console.log("handleUpdateLayer", newList)
    };
    
    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '1rem',
                minHeight: '100vh',
                position: 'relative',
            }}
        >
            <ToolPanel
                layerList={layerList}
                onBackgroundImageChange={handleSetBackgroundImage}
                onUpdateLayer={handleUpdateLayer}
                onReorderLayers={handleReorderLayers}
            />

            <Canvas
                layerList={layerList}
                backgroundImage={backgroundImage}
            />
        </main>
    );
}