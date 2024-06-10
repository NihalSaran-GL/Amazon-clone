import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

function Logo({ image, text, sizeW, sizeH }) {
  return (
    <LogoContainer>
      <img src={image} alt={text} style={{ width: sizeW, height: sizeH }} />
      <p>{text}</p>
    </LogoContainer>
  );
}

export default Logo;
