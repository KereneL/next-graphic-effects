"use client"

import React from 'react';
import Panel from './effects/Panel';

export default function LayerList({ effects, onBackgroundImageChange }) {
  return (
    <Panel
      effects={effects}
      onBackgroundImageChange={onBackgroundImageChange}
    />
  );
};