import React from 'react';
import styled from 'styled-components';
import { size, textSize } from "../Components/ReusableComponets/Sizes";
import colors from "../Components/ReusableComponets/Colors";

const LanguageSettings = () => {
  return (
    <SettingsContainer>
      <Title>Language Settings</Title>
      <Description>Select the language you prefer for browsing, shopping and communications.</Description>
      <LanguageOptions>
        <LanguageOption>
          <input type="radio" id="english" name="language" value="english" defaultChecked />
          <label htmlFor="english">English - EN</label>
        </LanguageOption>
        <LanguageOption>
          <input type="radio" id="hindi" name="language" value="hindi" />
          <label htmlFor="hindi">हिंदी - HI</label>
        </LanguageOption>
        <LanguageOption>
          <input type="radio" id="tamil" name="language" value="tamil" />
          <label htmlFor="tamil">தமிழ் - TA</label>
        </LanguageOption>
        <LanguageOption>
          <input type="radio" id="telugu" name="language" value="telugu" />
          <label htmlFor="telugu">తెలుగు - TE</label>
        </LanguageOption>
        <LanguageOption>
          <input type="radio" id="kannada" name="language" value="kannada" />
          <label htmlFor="kannada">ಕನ್ನಡ - KN</label>
        </LanguageOption>
        <LanguageOption>
          <input type="radio" id="malayalam" name="language" value="malayalam" />
          <label htmlFor="malayalam">മലയാളം - ML</label>
        </LanguageOption>
        <LanguageOption>
          <input type="radio" id="bengali" name="language" value="bengali" />
          <label htmlFor="bengali">বাংলা - BN</label>
        </LanguageOption>
        <LanguageOption>
          <input type="radio" id="marathi" name="language" value="marathi" />
          <label htmlFor="marathi">मराठी - MR</label>
        </LanguageOption>
      </LanguageOptions>
      <ButtonContainer>
        <CancelButton>Cancel</CancelButton>
        <SaveButton>Save Changes</SaveButton>
      </ButtonContainer>
    </SettingsContainer>
  );
};

const SettingsContainer = styled.div`
  background: ${colors.primary};
  padding: ${size.M};
  border-radius: ${size.S};
  width: 50%;
  margin: auto;
  box-shadow: 0 ${size.XXS} ${size.XS} rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: ${textSize.L};
  color: ${colors.quaternary};
  margin-bottom: ${size.M};
`;

const Description = styled.p`
  font-size: ${textSize.M};
  color: ${colors.quaternary};
  margin-bottom: ${size.L};
`;

const LanguageOptions = styled.div`
  margin-bottom: ${size.L};
`;

const LanguageOption = styled.div`
  margin-bottom: ${size.M};
  font-size: ${textSize.S};
  color: ${colors.quaternary};

  label {
    margin-left: ${size.XS};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${size.S};
`;

const CancelButton = styled.button`
  background: ${colors.secondary};
  color: ${colors.primary};
  padding: ${size.S} ${size.L};
  border: none;
  border-radius: ${size.XXS};
  cursor: pointer;
  font-size: ${textSize.S};
`;

const SaveButton = styled.button`
  background: ${colors.quinary};
  color: ${colors.primary};
  padding: ${size.S} ${size.L};
  border: none;
  border-radius: ${size.XXS};
  cursor: pointer;
  font-size: ${textSize.S};
`;

export default LanguageSettings;