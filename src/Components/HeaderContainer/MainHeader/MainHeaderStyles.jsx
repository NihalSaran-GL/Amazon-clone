import styled from "styled-components";
import { size, textSize } from "../../ReusableComponets/Sizes";
import colors from "../../ReusableComponets/Colors";

export const LogoWidth = size.XXXXL;
export const LogoHeight = size.XL;

export const MainHeader = styled.nav`
  font-size: ${textSize.XS};
  display: flex;
  background-color: ${colors.mainHeaderBackground};
  padding: ${size.S};
`;

export const LeftSection = styled.section`
  font-size: ${textSize.XS};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterSection = styled.section`
  font-size: ${textSize.XS};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

export const RightSection = styled.section`
  font-size: ${textSize.XS};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;
