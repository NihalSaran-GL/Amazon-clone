import React from "react";
import styled from "styled-components";

const LogoContainer = styled.figure`
  display: flex;
  align-items: center;
  color: white;
`;

function Logo({ image, logoName, text, width, height, color }) {
  return (
    <LogoContainer>
      <img src={image} alt={logoName} style={{ width: width, height: height, color: color }} />
      <figcaption>{text}</figcaption>
    </LogoContainer>
  );
}

export default Logo;
