import React from "react";

function Icons({ Icon, iconColor, iconSize }) {
  return (
    <i style={{ color: iconColor, fontSize: iconSize }}>
      <Icon />
    </i>
  );
}

export default Icons;
