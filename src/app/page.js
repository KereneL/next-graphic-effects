"use client"
import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ToolPanel from './components/ToolPanel';
import graphicEffects, { getEffectsArr } from './effects/Effects';

export default function Home() {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [activeEffect, setActiveEffect] = useState(null);
    const effects = getEffectsArr();

    const handleUpdateLayer = (layerId, updatedValues) => {
        const effect = effects.find(effect => effect.id === layerId);
        if (effect) {
            effect.values = updatedValues;
            setActiveEffect(effect);  // Trigger real-time update in Canvas
        }
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
                    effects={effects}
                    onBackgroundImageChange={setBackgroundImage}
                    onUpdateLayer={handleUpdateLayer}  // Handle real-time updates
                />

                <Canvas backgroundImage={backgroundImage} effect={activeEffect} />
        </main>
    );
}
