import React, { useState } from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const PopupTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const PopupText = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #FFD814;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 15px;
`;

const OrText = styled.p`
  text-align: center;
  font-size: 14px;
  margin-bottom: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const PincodeInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ApplyButton = styled.button`
  padding: 8px 15px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const LocationPopup = ({ onClose }) => {
  const [pincode, setPincode] = useState('');

  return (
    <PopupOverlay>
      <PopupContent>
        <PopupHeader>
          <PopupTitle>Choose your location</PopupTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </PopupHeader>
        <PopupText>
          Select a delivery location to see product availability and delivery options
        </PopupText>
        <SignInButton>Sign in to see your addresses</SignInButton>
        <OrText>or enter an Indian pincode</OrText>
        <InputContainer>
          <PincodeInput 
            type="text" 
            placeholder="500010" 
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <ApplyButton>Apply</ApplyButton>
        </InputContainer>
      </PopupContent>
    </PopupOverlay>
  );
};

export default LocationPopup;