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

const Button = ({ icon, text, color, borderColor, bgColor, borderRadius }) => {
  return (
    <IconButton
      style={{
        color: color,
        borderColor: borderColor,
        backgroundColor: bgColor,
        borderRadius: borderRadius,
      }}
    >
      {text}
      {React.isValidElement(icon) ? icon : null}
    </IconButton>
  );
};

export default Button;
