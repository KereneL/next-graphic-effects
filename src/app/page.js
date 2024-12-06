"use client"
import React from 'react';
import AppWrapper from './components/AppWrapper';

export default function Home() {

    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '1rem',
                minHeight: '100vh',
                position: 'relative',
                justifyContent: 'center',
            }}
        >
            <AppWrapper
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: '1rem',
                    minHeight: '100vh',
                    position: 'relative',
                }}
            />
        </main>
    );
}