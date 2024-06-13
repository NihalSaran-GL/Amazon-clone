import React from "react";

function Icons({ Icon, iconColor, iconSize, text, textSize, textColor, Icon2, margin, margin2 }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <i style={{ margin: margin }}>
        <Icon style={{ color: iconColor, fontSize: iconSize }} />
      </i>
      <p style={{ fontSize: textSize, color: textColor, marginRight: "5px" }}>{text}</p>
      {Icon2 && (
        <i style={{ margin: margin2 }}>
          <Icon2 style={{ color: iconColor, fontSize: iconSize }} />
        </i>
      )}
    </div>
  );
}

export default Icons;
