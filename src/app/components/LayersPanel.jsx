import React from 'react';
import List from './effects/List';

export default function LayersPanel({ effects, onBackgroundImageChange }) {
    return (
        <div
            className="layers-panel"
            style={{
                minWidth: "128px",
                maxWidth: "256px",
                margin: "0px auto",
                padding: "1em",
                height: "100%",  // Ensure it stretches to fill the parent height
                boxSizing: "border-box",  // Include padding in the height calculation
                width: "256px",
                position: 'relative',  // Position relative to allow ItemForm to be positioned absolutely
                overflow: 'visible',  // Ensure that the floating ItemForm can extend beyond the Panel
            }}>
            <List
                effects={effects}
                onBackgroundImageChange={onBackgroundImageChange}
                style={{ position: 'relative' }}
            />
        </div>
    );
};