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
import { BoxHover } from "../../ReusableComponets/BoxHover";

const Data = {
  image: imagesData.header_container.main_header.amazon_logo_image,
  text: englishData.header_container.main_header.amazon_logo_text,
  logoName: englishData.header_container.main_header.logo_name,
  locationIconText1: englishData.header_container.main_header.location_icon_text1,
  locationIconText2: englishData.header_container.main_header.location_icon_text2,
  searchBarPlaceholder: englishData.header_container.main_header.search_box_text,
  searchBarFilterButton: englishData.header_container.main_header.search_bar_filter_button,
  flagIconText: englishData.header_container.main_header.flag_icon_text,
  signInText: englishData.header_container.main_header.sign_in_text,
  accountText: englishData.header_container.main_header.account_text,
  ordersText: englishData.header_container.main_header.orders_text,
  returnsText: englishData.header_container.main_header.return_text,
  cartText: englishData.header_container.main_header.cart_text,
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
              {Data.locationIconText1}
            </p>
            <p
              style={{
                color: LocationIconText2,
                fontSize: LocationIconText2Size,
              }}
            >
              {Data.locationIconText2}
            </p>
          </TextContainer>
        </BoxHover>
      </LeftSection>
      <CenterSection>
        <SearchBar>
          <Button
            text={Data.searchBarFilterButton}
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
              {Data.signInText}
            </p>
            <p
              style={{
                color: LocationIconText2,
                fontSize: LocationIconText2Size,
              }}
            >
             {Data.accountText}
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
              {Data.returnsText}
            </p>
            <p
              style={{
                color: LocationIconText2,
                fontSize: LocationIconText2Size,
              }}
            >
              {Data.ordersText}
            </p>
          </TextContainer>
        </BoxHover>
        <BoxHover>
          <Icons
            text={Data.cartText}
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
