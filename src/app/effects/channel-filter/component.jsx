import React from "react";

export default function ChannelFilterComponent({ values, onChange }) {
  const handleRedToggle = (e) => {
    onChange({ ...values, red: !values.red });
  };
  const handleGreenToggle = (e) => {
    onChange({ ...values, green: !values.green });
  };
  const handleBlueToggle = (e) => {
    onChange({ ...values, blue: !values.blue });
  };

  return (
    <>
      <label>
      Red:
        <input
          type="checkbox"
          name="red-channel-toggle"
          checked={values.red}
          onChange={handleRedToggle}
        />
      </label>

      <label>
      Green:
        <input
          type="checkbox"
          name="green-channel-toggle"
          checked={values.green}
          onChange={handleGreenToggle}
        />
      </label>

      <label>
      Blue:
        <input
          type="checkbox"
          name="blue-channel-toggle"
          checked={values.blue}
          onChange={handleBlueToggle}
        />
      </label>
    </>
  );
}
