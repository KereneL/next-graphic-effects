'use client'

import React from 'react';

export default function LayerControls({ selectedLayer, onChange }) {
    return (
    <div style={{position: "absolute", left: "200px", backgroundColor:"white" ,width: "350px", height: "350px"}}>
        {selectedLayer.toString()}
    </div>
    )
    //(() => selectedLayer(onChange))
}