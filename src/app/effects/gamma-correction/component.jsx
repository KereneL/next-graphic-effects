import React from "react";

export default function GammaCorrectionComponent({ values, onChange }) {
  const handleSliderChange = (e) => {
    onChange({ ...values, gamma: parseFloat(e.target.value) });
  };

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ marginBlockEnd: ".25em", fontWeight: "bold" }}>
        Gamma Correction
      </div>
      <label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingInlineStart: "0.25em",
          }}
        >
          <span>Gamma: </span>
          <span>{values.gamma}</span>
        </div>
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
    </div>
  );
}
