import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../ReusableComponets/Logo";
import englishData from "../../../../data/English.json";
import imagesData from "../../../../data/Image.json";
import Icons from "../../ReusableComponets/Icons";
import { LocationOn } from "styled-icons/material";

const AmazonLogoWidth = "50px";
const AmazonLogoHeight = "30px";
const LocationIconColor = "white";
const LocationIconSize = "14px";
const LocationIconText1Size = "18px";
const LocationIconText2Size = "18px";
const LocationIconText1Color = "grey";
const LocationIconText2Color = "white";

const HUpperMainBody = styled.div`
  font-size: 18px;
  display: flex;
  background-color: rgb(19, 25, 33);
`;
const LeftSection = styled.div`
  padding: 0px 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CenterSection = styled.div`
  font-size: 18px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;
const RightSection = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;

function HUpper() {
  const [logoData, setLogoData] = useState({
    image: "",
    text: "",
  });
  const [locationIconData, setLocationIconData] = useState({
    text1: "",
    text2: "",
  });

  useEffect(() => {
    setLogoData({
      image: imagesData.amazon_logo_image,
      text: englishData.logotext,
    });
    setLocationIconData({
      text1: englishData.location_icon_text1,
      text2: englishData.location_icon_text2,
    });
  }, []);

  return (
    <HUpperMainBody>
      <LeftSection>
        <Logo
          image={logoData.image}
          text={logoData.text}
          sizeW={AmazonLogoWidth}
          sizeH={AmazonLogoHeight}
        />
        <Icons
          Icon={LocationOn}
          text1={locationIconData.text1}
          text2={locationIconData.text2}
          iconColor={LocationIconColor}
          iconSize={LocationIconSize}
          text1Color={LocationIconText1Color}
          text1Size={LocationIconText1Size}
          text2Color={LocationIconText2Color}
          text2Size={LocationIconText2Size}
        />
      </LeftSection>
      <CenterSection>CenterSection</CenterSection>
      <RightSection>RightSection</RightSection>
    </HUpperMainBody>
  );
}

export default HUpper;
