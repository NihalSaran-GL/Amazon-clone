import styled from "styled-components";
import { sectionSize, size, textSize } from "../../ReusableComponets/Sizes";
import colors from "../../ReusableComponets/Colors";

export const LogoWidth = size.XXL;
export const LogoHeight = size.L;

export const LocationIconText1 = colors.tertiary;
export const LocationIconText2 = colors.primary;
export const LocationIconColor = colors.primary;
export const LocationIconText1Size = textSize.XXS;
export const LocationIconText2Size = textSize.XS;
export const LocationIconSize = size.M;

export const searchBarBorderColor = "transparent";
export const SearchIconColor = colors.quaternary;
export const SearchIconBoxPadding = size.XS;
export const SearchIconBoxColor1 = colors.senary;
export const SearchIconBoxColor2 = colors.quinary;
export const SearchIconBoxBorderRadius1 = size.XS + " 0 0 " + size.XS;
export const SearchIconBoxBorderRadius2 = "0 " + size.XS + " " + size.XS + " 0";

export const FlagIconTextColor = colors.tertiary;
export const flagIconColor = colors.primary;
export const FlagIconTextSize = textSize.XS;
export const FlagIconTextMargin = "0 " + size.XXS + " -" + size.XXS + " 0";
export const FlagIcon2TextMargin = "0 0 -" + size.XS + " -" + size.XS;

export const ArrowDropDownSignInIconColor = colors.primary;
export const ArrowDropDownSignInTextMargin = "0 0 -" + size.XS + " -" + size.S;

export const CartIconColor = colors.primary;
export const CartIconSize = size.L;

export const MainHeader = styled.nav`
  font-size: ${textSize.XS};
  display: flex;
  background-color: ${colors.secondary};
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
  width: ${sectionSize.XL};
  height: ${size.M};
`;

export const BoxHover = styled.section`
  display: flex;
  padding: ${size.S};
  margin: 0 ${size.XS};
  border-radius: ${size.XS};
  cursor: pointer;
  border: 1px solid ${colors.secondary};
  transition: border 0.2s;
  &:hover {
    border: 1px solid ${colors.primary};
  }
`;
