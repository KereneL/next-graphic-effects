"use client"

import React, { useState } from 'react';
import Canvas from './components/Canvas';
import LayerList from './components/LayerList';
import graphicEffects, { getEffectsArr } from './effects/Effects';

export default function Home() {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const effects = getEffectsArr();

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
            <div style={{ flexShrink: 0, flexBasis: 'auto' }} className="layers-list">
                <LayerList
                    effects={effects}
                    onBackgroundImageChange={setBackgroundImage}
                />
            </div>

            <div style={{ flexGrow: 1 }} className="canvas-component">
                <Canvas backgroundImage={backgroundImage} />
            </div>
        </main>
    );
}
