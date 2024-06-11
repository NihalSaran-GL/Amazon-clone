import React from "react";
import styled from "styled-components";

const LogoContainer = styled.figure`
  display: flex;
  align-items: center;
  color: white;
`;

function Logo({ image, logoName, text, width, height }) {
  return (
    <LogoContainer>
      <img src={image} alt={logoName} style={{ width: width, height: height }} />
      <p>{text}</p>
    </LogoContainer>
  );
}

export default Logo;
