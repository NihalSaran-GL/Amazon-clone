import React from "react";
import { MainHeader, LeftSection, CenterSection, RightSection, LogoWidth, LogoHeight } from "./MainHeaderStyles";
import Logo from "../../ReusableComponets/Logo";
import { useLogoData, useLocationIconData } from "../../ReusableComponets/Hooks";
import englishData from "../../../../public/data/English.json";
import imagesData from "../../../../public/data/Image.json";

const LogoData = {
  image: imagesData.amazon_logo_image,
  text: englishData.logotext,
  logoName: englishData.logo_name,
};

const LocationIconData = {
  text1: englishData.location_icon_text1,
  text2: englishData.location_icon_text2,
};

function Main_Header() {
  const logoData = useLogoData(LogoData);
  const locationIconData = useLocationIconData(LocationIconData);

  return (
    <MainHeader>
      <LeftSection>
        <Logo
          image={logoData.image}
          logoName={logoData.logoName}
          text={logoData.text}
          width={LogoWidth}
          height={LogoHeight}
        />
      </LeftSection>
      <CenterSection>CenterSection</CenterSection>
      <RightSection>RightSection</RightSection>
    </MainHeader>
  );
}

export default Main_Header;
