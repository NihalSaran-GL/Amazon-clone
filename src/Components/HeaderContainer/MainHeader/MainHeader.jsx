import React from "react";
import {
  MainHeader,
  LeftSection,
  CenterSection,
  RightSection,
  LogoWidth,
  LogoHeight,
  TextContainer,
  LogoContainer,
  LocationIconText1,
  LocationIconText2,
  LocationIconColor,
  LocationIconText1Size,
  LocationIconText2Size,
  LocationIconSize,
  SearchBar,
  MainSearchSection,
  SearchIconColor,
  SearchIconBoxPadding,
  searchBarBorderColor,
  SearchIconBoxColor2,
  SearchIconBoxColor1,
  SearchIconBoxBorderRadius1,
  SearchIconBoxBorderRadius2,
  FlagIconTextColor,
  FlagIconTextSize,
  FlagIconTextMargin,
  FlagIcon2TextMargin,
  BoxHover,
  ArrowDropDownSignInIconColor,
  ArrowDropDownSignInTextMargin,
  flagIconColor,
  CartIconColor,
  CartIconSize,
} from "./MainHeaderStyles";
import Logo from "../../ReusableComponets/Logo";
import englishData from "../../../../public/data/English.json";
import imagesData from "../../../../public/data/Image.json";
import Icons from "../../ReusableComponets/Icons";
import { ArrowDropDown, LocationOn, Search, Flag, AddShoppingCart } from "@mui/icons-material";
import Button from "../../ReusableComponets/Button";
import { F } from "styled-icons/fa-solid";

const Data = {
  image: imagesData.amazon_logo_image,
  text: englishData.amazon_logo_text,
  logoName: englishData.logo_name,
  searchBarPlaceholder: englishData.search_box_text,
  leftBoxOfSearchBox: englishData.left_search_box_text,
  flagIconText: englishData.flag_icon_text,
};

function Main_Header() {
  return (
    <MainHeader>
      <LeftSection>
      <BoxHover> 
        <LogoContainer>
          <Logo
            image={Data.image}
            logoName={Data.logoName}
            text={Data.text}
            width={LogoWidth}
            height={LogoHeight}
            color={LocationIconColor}
          />
        </LogoContainer>
        </BoxHover>
        <BoxHover>
          <Icons
            Icon={LocationOn}
            iconColor={LocationIconColor}
            iconSize={LocationIconSize}
          />
          <TextContainer>
            <p
              style={{
                color: LocationIconText1,
                fontSize: LocationIconText1Size,
              }}
            >
              Deliver to
            </p>
            <p
              style={{
                color: LocationIconText2,
                fontSize: LocationIconText2Size,
              }}
            >
              India
            </p>
          </TextContainer>
        </BoxHover>
      </LeftSection>
      <CenterSection>
        <SearchBar>
          <Button
            text={Data.leftBoxOfSearchBox}
            icon={<ArrowDropDown />}
            color={SearchIconColor}
            padding={SearchIconBoxPadding}
            bgColor={SearchIconBoxColor1}
            borderColor={searchBarBorderColor}
            borderRadius={SearchIconBoxBorderRadius1}
          />
          <MainSearchSection placeholder={Data.searchBarPlaceholder} />
          <Button
            icon={<Search />}
            color={SearchIconColor}
            padding={SearchIconBoxPadding}
            bgColor={SearchIconBoxColor2}
            borderColor={searchBarBorderColor}
            borderRadius={SearchIconBoxBorderRadius2}
          />
        </SearchBar>
      </CenterSection>
      <RightSection>
        <BoxHover>
          <Icons
            Icon={Flag}
            iconColor={flagIconColor}
            text={Data.flagIconText}
            textSize={FlagIconTextSize}
            textColor={FlagIconTextColor}
            Icon2={ArrowDropDown}
            margin={FlagIconTextMargin}
            margin2={FlagIcon2TextMargin}
          />
        </BoxHover>
        <BoxHover>
          <TextContainer>
            <p
              style={{
                color: LocationIconText1,
                fontSize: LocationIconText1Size,
              }}
            >
              Hello, Sign in
            </p>
            <p
              style={{
                color: LocationIconText2,
                fontSize: LocationIconText2Size,
              }}
            >
              Account & Lists
            </p>
          </TextContainer>
          <Icons
            Icon={ArrowDropDown}
            iconColor={ArrowDropDownSignInIconColor}
            margin={ArrowDropDownSignInTextMargin}
          />
        </BoxHover>
        <BoxHover>
          <TextContainer>
            <p
              style={{
                color: LocationIconText1,
                fontSize: LocationIconText1Size,
              }}
            >
              Returns
            </p>
            <p
              style={{
                color: LocationIconText2,
                fontSize: LocationIconText2Size,
              }}
            >
              & Orders
            </p>
          </TextContainer>
        </BoxHover>
        <BoxHover>
          <Icons
            text={"cart"}
            textColor={LocationIconText2}
            iconSize={CartIconSize}
            Icon={AddShoppingCart}
            iconColor={CartIconColor}
            margin={ArrowDropDownSignInTextMargin}
          />
        </BoxHover>
      </RightSection>
    </MainHeader>
  );
}

export default Main_Header;
