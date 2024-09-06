
import React from 'react';

export default function ItemForm({ selectedLayer, style }) {
    if (!selectedLayer) {
        return null;
    }

    const arr = [];
        for (let value in selectedLayer){
             arr.push(value.toString())
        }
    const textualProps = arr.toString();

    return (
        <div
            style={{
                ...style,
                position: 'absolute',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: '#f9f9f9',
                height: '200px',
                maxWidth: '300px',  // Adjust the maximum width as needed
                minWidth: '200px',  // Ensure a minimum width
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Add a shadow for better visibility
                overflow: 'auto',  // Allow content to scroll if it overflows
                zIndex: 1000,  // Ensure it stays on top
                color: '#000000',
            }}>
            <p>{textualProps}</p>
        </div>
    );
};