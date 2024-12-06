import React from "react";

export default function BayerDitheringComponent({ values, onChange }) {
  const handleSelectChange = (e) => {
    onChange({ ...values, nValue: parseInt(e.target.value) });
  };

  const handleSliderChange = (e) => {
    onChange({ ...values, spread: parseFloat(e.target.value) });
  };

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ marginBlockEnd: ".25em", fontWeight: "bold" }}>
        Bayer Dithering
      </div>

      <label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingInlineStart: "0.25em",
          }}
        >
          <span>n Value:</span>
          <select
            name="bayer-n-value"
            value={values.nValue}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="8">8</option>
          </select>
        </div>
      </label>

      <label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingInlineStart: "0.25em",
          }}
        >
          <span>Spread:</span>
          <span>{values.spread}</span>
        </div>
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
    </div>
  );
}
