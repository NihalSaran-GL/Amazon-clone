import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../ReusableComponents/Logo";

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
    Promise.all([
      fetch('/english.json').then(response => response.json()),
      fetch('/images.json').then(response => response.json())
    ])
    .then(([englishData, imagesData]) => {
      setLogoData({ image: imagesData.logoimage, text: englishData.logotext });
    })
    .catch(error => console.error('Error loading data:', error));
  }, []);

  return (
    <HUpperMainBody>
      <LeftSection>
        <Logo image={logoData.image} text={logoData.text} />
      </LeftSection>
      <CenterSection>CenterSection</CenterSection>
      <RightSection>RightSection</RightSection>
    </HUpperMainBody>
  );
}

export default HUpper;
