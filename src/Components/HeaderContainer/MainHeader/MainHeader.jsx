import React from "react";
import {
  MainHeader,
  LeftSection,
  searchBarFontsize,
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
  DropdownMenuColor,
  DropdownMenuHoverColor,
  DropdownContentColor,
  DropdownContentPadding,
} from "./MainHeaderStyles";
import Logo from "../../ReusableComponets/Logo";
import englishData from "../../../../public/data/English.json";
import imagesData from "../../../../public/data/Image.json";
import Icons from "../../ReusableComponets/Icons";
import {
  ArrowDropDown,
  LocationOn,
  Search,
  Flag,
  AddShoppingCart,
} from "@mui/icons-material";
import Button from "../../ReusableComponets/Button";
import { BoxHover } from "../../ReusableComponets/BoxHover";
import Dropdown from "../../ReusableComponets/DropdownMenu";

const Data = {
  image: imagesData.header_container.main_header.amazon_logo_image,
  text: englishData.header_container.main_header.amazon_logo_text,
  logoName: englishData.header_container.main_header.logo_name,
  locationIconText1:
    englishData.header_container.main_header.location_icon_text1,
  locationIconText2:
    englishData.header_container.main_header.location_icon_text2,
  searchBarPlaceholder:
    englishData.header_container.main_header.search_box_text,
  searchBarFilterButton:
    englishData.header_container.main_header.search_bar_filter_button,
  flagIconText: englishData.header_container.main_header.flag_icon_text,
  signInText: englishData.header_container.main_header.sign_in_text,
  accountText: englishData.header_container.main_header.account_text,
  ordersText: englishData.header_container.main_header.orders_text,
  returnsText: englishData.header_container.main_header.return_text,
  cartText: englishData.header_container.main_header.cart_text,
};

const dropdownItems = [
  { label: "All Categories", href: "/" },
  { label: "Alexa Skills", href: "Alexa Skills" },
  { label: "Amazon Devices", href: "Amazon Devices" },
  { label: "Amazon Fashion", href: "Amazon Fashion" },
  { label: "Amazon Fresh", href: "Amazon Fresh" },
  { label: "Amazon Fresh Meat", href: "Amazon Fresh Meat" },
  { label: "Amazon Pharmacy", href: "Amazon Pharmacy" },
  { label: "Appliances", href: "Appliances" },
  { label: "Apps & Games", href: "Apps & Games" },
  { label: "Audible Audiobooks", href: "Audible Audiobooks" },
  { label: "Baby", href: "Baby" },
  { label: "Beauty", href: "Beauty" },
  { label: "Books", href: "Books" },
  { label: "Car & Motorbikes", href: "Car & Motorbikes" },
  { label: "Clothing & Accessories", href: "Clothing & Accessories" },
  { label: "Collectibles", href: "Collectibles" },
  { label: "Computers & Accessories", href: "Computers & Accessories" },
  { label: "Deals", href: "Deals" },
  { label: "Electronics", href: "Electronics" },
  { label: "Furniture", href: "Furniture" },
  { label: "Garden & Outdoors", href: "Garden & Outdoors" },
  { label: "Gift Cards", href: "Gift Cards" },
  { label: "Grocery & Gourmet Foods", href: "Grocery & Gourmet Foods" },
  { label: "Health & Personal Care", href: "Health & Personal Care" },
  { label: "Home & Kitchen", href: "Home & Kitchen" },
  { label: "Industrial & Scientific", href: "Industrial & Scientific" },
  { label: "Jewellery", href: "Jewellery" },
  { label: "Kindle Store", href: "Kindle Store" },
  { label: "Luggage & Bags", href: "Luggage & Bags" },
  { label: "Luxury Beauty", href: "Luxury Beauty" },
  { label: "Movies & TV Shows", href: "Movies & TV Shows" },
  { label: "MP3 Music", href: "MP3 Music" },
  { label: "Music", href: "Music" },
  { label: "Musical Instruments", href: "Musical Instruments" },
  { label: "Office Products", href: "Office Products" },
  { label: "Pet Supplies", href: "Pet Supplies" },
  { label: "Prime Video", href: "Prime Video" },
  { label: "Shoes & Handbags", href: "Shoes & Handbags" },
  { label: "Software", href: "Software" },
  { label: "Sports, Fitness & Outdoors", href: "Sports, Fitness & Outdoors" },
  { label: "Subscribe & Save", href: "Subscribe & Save" },
  { label: "Tools & Home Improvements", href: "Tools & Home Improvements" },
  { label: "Toys & Games", href: "Toys & Games" },
  { label: "Under ₹500", href: "Under ₹500" },
  { label: "Video Games", href: "Video Games" },
  { label: "Watches", href: "Watches" },
];


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
          <Dropdown
            buttonLabel={Data.searchBarFilterButton}
            items={dropdownItems}
            buttonProps={{
              backgroundColor: SearchIconBoxColor1,
              padding: SearchIconBoxPadding,
              fontSize: searchBarFontsize,
              color: SearchIconColor,
              borderRadius:SearchIconBoxBorderRadius1,
            }}
            dropdownProps={{
              contentBgColor: DropdownMenuColor,
            }}
            itemProps={{
              itemPadding:  DropdownContentPadding,
              itemHoverBgColor: DropdownMenuHoverColor,
              itemHoverColor: DropdownContentColor,
            }}
            icon={<ArrowDropDown />}
            maxHeight="350px"
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
