import React from "react";

export default function DesaturateComponent({ values, onChange }) {
  const handleToggleChange = (e) => {
    onChange({ ...values, toggle: !values.toggle });
  };

  return (
    <>
      <label>
        Desaturation:
        <input
          type="checkbox"
          name="desaturation-toggle"
          checked={values.toggle}
          onChange={handleToggleChange}
        />
      </label>
    </>
  );
}
