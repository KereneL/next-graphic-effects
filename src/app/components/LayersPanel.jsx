import React from 'react';
import List from "./List";

export default function LayersPanel({ layerList, onBackgroundImageChange, onReorderLayers, onUpdateLayer }) {
    return (
        <div
            className="layers-panel"
            style={{
                minWidth: '128px',
                maxWidth: '256px',
                margin: '0.2em',
                padding: '0.2em',
                height: '100%',  // Ensure it stretches to fill the parent height
                boxSizing: 'border-box',  // Include padding in the height calculation
                width: '256px',
                position: 'relative',  // Position relative to allow ItemForm to be positioned absolutely
                overflow: 'visible',  // Ensure that the floating ItemForm can extend beyond the Panel
            }}>
            <List
            layerList = {layerList}
                onBackgroundImageChange={onBackgroundImageChange}
                onReorderLayers={onReorderLayers}
                onUpdateLayer={onUpdateLayer}
            />
        </div>
    );
};