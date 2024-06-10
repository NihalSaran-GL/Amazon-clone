import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../ReusableComponets/Logo";
import englishData from '../../../../data/English.json';
import imagesData from '../../../../data/image.json';


const HUpperMainBody = styled.div`
  font-size: 18px;
  display: flex;
`;

const LeftSection = styled.div`
  font-size: 18px;
  display: flex;
  background-color: red;
  align-items: center;  /* Centering content vertically */
  justify-content: center;  /* Centering content horizontally */
`;

const CenterSection = styled.div`
  font-size: 18px;
  display: flex;
  background-color: blue;
  flex: 1;  /* To equally distribute space */
  align-items: center;
  justify-content: center;
`;

const RightSection = styled.div`
  font-size: 18px;
  display: flex;
  background-color: pink;
  align-items: center;
  justify-content: center;
`;

function HUpper() {
  const [logoData, setLogoData] = useState({ image: '', text: '' });

  useEffect(() => {
    setLogoData({ image: imagesData.logoimage1, text: englishData.logotext });
  }, []);

  return (
    <HUpperMainBody>
      <LeftSection>
        <Logo image={logoData.image} text={logoData.text} />
        LeftSection
      </LeftSection>
      <CenterSection>CenterSection</CenterSection>
      <RightSection>RightSection</RightSection>
    </HUpperMainBody>
  );
}

export default HUpper;
