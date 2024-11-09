import React from 'react';

export default function GammaCorrectionComponent({ values, onChange }) {

  const handleSliderChange = (e) => {
    onChange({ ...values, gamma: parseFloat(e.target.value) });
  };

  return (
    <>
      <label>
      Gamma: {values.gamma}
      <br />
        <input
          type="range"
          min="0"
          max="3"
          step="0.01"
          value={values.gamma}
          onChange={handleSliderChange}
          className="gamma-correction-slider"
        />
      </label>
    </>
  );
}
