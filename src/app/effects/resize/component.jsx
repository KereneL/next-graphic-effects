import React from 'react';

export default function ResizeComponent({ values, onChange }) {

  const handleWidthChange = (e) => {
    onChange({ ...values, width: parseInt( Math.round(e.target.value)) });
  };
  const handleHeightChange = (e) => {
    onChange({ ...values, height: parseInt( Math.round(e.target.value)) });
  };

  return (
    <>
      <label>
      {`Width: ${(values.width===0)?"🔗":`${values.width}px`}`}
      <br />
        <input
          type="text"
          value={values.width}
          onChange={handleWidthChange}
          className="resizer-width-input"
        />
      </label>

      <label>
      {`Height: ${(values.height===0)?"🔗":`${values.height}px`}`}
      <br />
        <input
          type="text"
          value={values.height}
          onChange={handleHeightChange}
          className="resizer-height-input"
        />
      </label>
    </>
  );
}
