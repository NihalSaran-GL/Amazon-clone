import styled from "styled-components";
import { size } from "../../ReusableComponets/Sizes";

export const LogoWidth = size.XXXXL;
export const LogoHeight = size.XXL;

export const MainHeader = styled.nav`
  font-size: 18px;
  display: flex;
  background-color: rgb(19, 25, 33);
`;

export const LeftSection = styled.section`
  padding: 0px 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterSection = styled.section`
  font-size: 18px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

export const RightSection = styled.section`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;
