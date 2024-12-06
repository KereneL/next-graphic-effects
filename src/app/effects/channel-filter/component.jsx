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

  const labelStyle = {
    display: "flex",
    justifyContent: "space-between",
    paddingInlineStart: "0.25em",
  };

  const color = `rgb(${255 * values.red},${255 * values.green},${
    255 * values.blue
  },0.1)`;
  return (
    <div style={{ backgroundColor: color, padding: "10px" }}>
      <div style={{ marginBlockEnd: ".25em", fontWeight: "bold" }}>
        RGB Channel Mixer
      </div>
      <label style={labelStyle}>
        <span>Red:</span>
        <input
          type="checkbox"
          name="red-channel-toggle"
          checked={values.red}
          onChange={handleRedToggle}
          style={{ accentColor: "#ff0000" }}
        />
      </label>

      <label style={labelStyle}>
        <span>Green:</span>
        <input
          type="checkbox"
          name="green-channel-toggle"
          checked={values.green}
          onChange={handleGreenToggle}
          style={{ accentColor: "#00ff00" }}
        />
      </label>

      <label style={labelStyle}>
        <span>Blue:</span>
        <input
          type="checkbox"
          name="blue-channel-toggle"
          checked={values.blue}
          onChange={handleBlueToggle}
          style={{ accentColor: "#0000ff" }}
        />
      </label>
    </div>
  );
}
