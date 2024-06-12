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
} from "./MainHeaderStyles";
import Logo from "../../ReusableComponets/Logo";
import { useLogoData } from "../../ReusableComponets/Hooks";
import englishData from "../../../../public/data/English.json";
import imagesData from "../../../../public/data/Image.json";
import iconData from "../../../../public/data/Icon.json";
import Icons from "../../ReusableComponets/Icons";
import { LocationOn } from "@mui/icons-material";

const LogoData = {
  image: imagesData.amazon_logo_image,
  text: englishData.amazon_logo_text,
  logoName: englishData.logo_name,
  iconName: iconData.location,
};

function Main_Header() {
  const logoData = useLogoData(LogoData);

  return (
    <MainHeader>
      <LeftSection>
        <LogoContainer>
          <Logo
            image={logoData.image}
            logoName={logoData.logoName}
            text={logoData.text}
            width={LogoWidth}
            height={LogoHeight}
            color={LocationIconColor}
          />
        </LogoContainer>
        <Icons Icon={LocationOn} iconColor={LocationIconColor} iconSize={LocationIconSize} />
        <TextContainer>
          <p style={{color: LocationIconText1, fontSize: LocationIconText1Size}}>Deliver to</p>
          <p style={{color: LocationIconText2, fontSize: LocationIconText2Size}}>India</p>
        </TextContainer>
      </LeftSection>
      <CenterSection>CenterSection</CenterSection>
      <RightSection>RightSection</RightSection>
    </MainHeader>
  );
}

export default Main_Header;
