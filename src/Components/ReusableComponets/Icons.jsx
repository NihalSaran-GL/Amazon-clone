import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
`;

const Text1 = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size};
`;

const Text2 = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size};
`;

function Icons({ Icon, text1, text2, iconColor, iconSize, text1Color, text1Size, text2Color, text2Size}) {
  return (
    <IconContainer>
      <Icon style={{ color: iconColor, height: iconSize }} />
      <Text1 color={text1Color} size={text1Size}>{text1}</Text1>
      <Text2 color={text2Color} size={text2Size}>{text2}</Text2>
    </IconContainer>
  );
}

export default Icons;
