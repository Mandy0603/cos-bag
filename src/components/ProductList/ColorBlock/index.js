import React from "react";

const ColorBlock = ({ color }) => {
  return (
    <span
      className="color__span"
      style={{
        backgroundColor: `${color.hex_value}`
      }}
    >
      {/* {color.colour_name} */}
    </span>
  );
};

export default ColorBlock;
