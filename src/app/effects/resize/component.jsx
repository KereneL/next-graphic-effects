import React from "react";

export default function ResizeComponent({ values, onChange }) {
  const handleWidthChange = (e) => {
    onChange({ ...values, width: parseInt(Math.round(e.target.value)) });
  };
  const handleHeightChange = (e) => {
    onChange({ ...values, height: parseInt(Math.round(e.target.value)) });
  };

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ marginBlockEnd: ".25em", fontWeight: "bold" }}>Resize</div>
      <label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingInlineStart: "0.25em",
          }}
        >
          <span>Width: </span>
          <span>{`${values.width === 0 ? "🔗" : `${values.width}px`}`}</span>
        </div>

        <input
          type="text"
          value={values.width}
          onChange={handleWidthChange}
          className="resizer-width-input"
        />
      </label>

      <label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingInlineStart: "0.25em",
          }}
        >
          <span>Height: </span>
          <span>{`${values.height === 0 ? "🔗" : `${values.height}px`}`}</span>
        </div>

        <input
          type="text"
          value={values.width}
          onChange={handleWidthChange}
          className="resizer-width-input"
        />
      </label>
    </div>
  );
}
