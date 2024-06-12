import styled from "styled-components";
import { largeSize, size, textSize } from "../../ReusableComponets/Sizes";
import colors from "../../ReusableComponets/Colors";

export const LogoWidth = size.XXXXL;
export const LogoHeight = size.XL;

export const LocationIconText1 = colors.iconTextColor1;
export const LocationIconText2 = colors.iconTextColor2;
export const LocationIconColor = colors.iconColor;
export const LocationIconText1Size = textSize.XXS;
export const LocationIconText2Size = textSize.XS;
export const LocationIconSize = size.M;

export const searchBarBorderColor = "transparent";
export const SearchIconColor = colors.searchIconColor;
export const SearchIconBoxPadding = size.XS;
export const SearchIconBoxColor1 = colors.leftBoxOfSearchBox;
export const SearchIconBoxColor2 = colors.searchIconBoxColor;
export const SearchIconBoxBorderRadius1 = size.XS + " 0 0 " + size.XS;
export const SearchIconBoxBorderRadius2 = "0 " + size.XS + " " + size.XS + " 0";

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
  justify-content: space-between;
`;

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: ${size.S};
`;

export const CenterSection = styled.section`
  font-size: ${textSize.XS};
  display: flex;
  justify-content: center;
  margin: 0 ${size.XXL};
`;

export const RightSection = styled.section`
  font-size: ${textSize.XS};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;

export const LogoContainer = styled.section`
  margin-right: ${size.L};
`;

export const SearchBar = styled.fieldset`
  display: flex;
  align-items: center;
`;

export const MainSearchSection = styled.input`
  padding: ${size.S};
  border: none;
  width: ${largeSize.XXL};
`;
