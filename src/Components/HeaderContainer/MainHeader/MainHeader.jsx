import React, { useState, useEffect } from "react";
import { MainHeader, LeftSection, CenterSection, RightSection, AmazonLogoWidth, AmazonLogoHeight, LocationIconTextSize, LocationIconColor, LocationIconSize  } from "./MainHeaderStyles";
import Logo from "../../ReusableComponets/Logo";
import Icons from "../../ReusableComponets/Icons";
import { LocationOn } from "styled-icons/material";
import FontSizeText from "../../ReusableComponets/FontSizeText";
import englishData from "../../../../data/English.json";
import imagesData from "../../../../data/Image.json";

const LogoData = {
  image: imagesData.amazon_logo_image,
  text: englishData.logotext,
  logoName: englishData.logo_name,
};

const LocationIconData = {
  text1: englishData.location_icon_text1,
  text2: englishData.location_icon_text2,
};


function HUpper() {

  const [logoData, setLogoData] = useState(LogoData);
  const [locationIconData, setLocationIconData] = useState(LocationIconData);

  useEffect(() => {
    setLogoData(LogoData);
    setLocationIconData(LocationIconData);
  }, []);

  return (
    <MainHeader>
      <LeftSection>
        <Logo
          image={logoData.image}
          logoName={logoData.logoName}
          text={logoData.text}
          width={AmazonLogoWidth}
          height={AmazonLogoHeight}
        />
        <FontSizeText size={LocationIconTextSize}>
          {locationIconData.text1}
        </FontSizeText>
        <FontSizeText size={LocationIconTextSize}>
          {locationIconData.text2}
        </FontSizeText>
        <Icons
            Icon={LocationOn}
            iconColor={LocationIconColor}
            iconSize={LocationIconSize}
          />
      </LeftSection>
      <CenterSection>CenterSection</CenterSection>
      <RightSection>RightSection</RightSection>
    </MainHeader>
  );
}

export default HUpper;
