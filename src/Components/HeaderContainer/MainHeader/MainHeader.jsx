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
  leftBoxOfSearchBox,
} from "./MainHeaderStyles";
import Logo from "../../ReusableComponets/Logo";
import englishData from "../../../../public/data/English.json";
import imagesData from "../../../../public/data/Image.json";
import Icons from "../../ReusableComponets/Icons";
import { ArrowDropDown, LocationOn, Search } from "@mui/icons-material";
import Button from "../../ReusableComponets/Button";

const Data = {
  image: imagesData.amazon_logo_image,
  text: englishData.amazon_logo_text,
  logoName: englishData.logo_name,
  searchBarPlaceholder: englishData.search_box_text,
  leftBoxOfSearchBox: englishData.left_search_box_text
};

function Main_Header() {
  return (
    <MainHeader>
      <LeftSection>
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
      <RightSection>RightSection</RightSection>
    </MainHeader>
  );
}

export default Main_Header;
