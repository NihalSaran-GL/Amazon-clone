import React from "react";

function Icons({ Icon, iconColor, iconSize }) {
  return (
    <i>
      <Icon style={{ color: iconColor, fontSize: iconSize }} />
    </i>
  );
}

export default Icons;
