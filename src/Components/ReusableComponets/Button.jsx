import React from "react";
import styled from "styled-components";

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Button = ({ icon, text, color, borderColor, bgColor, borderRadius, padding, height, width, align, iconSize, gap, iconColor}) => {
  const iconStyle = {
    width: iconSize || undefined,
    height: iconSize || undefined,
    color: iconColor || undefined,
  };

  const textStyle = {
    marginLeft: align === 'left' && gap ? gap : '0',
    marginRight: align !== 'left' && gap ? gap : '0',
    color: color || undefined,
  };

  return (
    <IconButton
      style={{
        borderColor: borderColor,
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        padding: padding,
        height: height,
        width: width,
      }}
    >
      {align === "left" && React.isValidElement(icon) && React.cloneElement(icon, { style: { ...icon.props.style, ...iconStyle } })}
      <p style={textStyle}>{text}</p>
      {align !== "left" && React.isValidElement(icon) && React.cloneElement(icon, { style: { ...icon.props.style, ...iconStyle } })}
    </IconButton>
  );
};

export default Button;
