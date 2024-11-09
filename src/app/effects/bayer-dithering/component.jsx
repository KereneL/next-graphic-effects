import React from 'react';

export default function BayerDitheringComponent({ values, onChange }) {
  const handleSelectChange = (e) => {
    onChange({ ...values, nValue: parseInt(e.target.value) });
  };

  const handleSliderChange = (e) => {
    onChange({ ...values, spread: parseFloat(e.target.value) });
  };

  return (
    <>
      <label>
        n Value:
        <select
          name="bayer-n-value"
          value={values.nValue}
          onChange={handleSelectChange}
        >
          <option value="2">n= 2^1</option>
          <option value="4">n= 2^2</option>
          <option value="8">n= 2^3</option>
        </select>
      </label>
      <label>
        Spread: {values.spread}
        <br />
        <input
          type="range"
          min="0"
          max="1"
          big-step="0.5"
          step="0.025"
          value={values.spread}
          onChange={handleSliderChange}
          className="bayer-spread-slider"
        />
      </label>
    </>
  );
}
