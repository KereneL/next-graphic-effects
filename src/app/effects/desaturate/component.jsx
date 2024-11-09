import React from 'react';

export default function DesaturateComponent({ values, onChange }) {

  const handleToggleChange = (e) => {
    onChange({ ...values, toggle: !values.toggle });
  };

  return (
    <>
        <label>
          Toggle desaturation:
        </label>
        <input type="checkbox" name="desaturation-toggle" value={values.toggle} onChange={handleToggleChange}>
        </input>
    </>
  );
}
