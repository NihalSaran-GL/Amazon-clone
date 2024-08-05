import React from 'react';
import styled from 'styled-components';
import { size, textSize } from "../ReusableComponets/Sizes";
import colors from "../ReusableComponets/Colors";

const PriceDetails = () => {
  return (
    <PriceContainer>
      <Subtotal>Subtotal (1 item): ₹798.00</Subtotal>
      <CheckoutButton>Proceed to Buy</CheckoutButton>
    </PriceContainer>
  );
};

const PriceContainer = styled.div`
  padding: ${size.M};
  border-top: 1px solid ${colors.senary};
`;

const Subtotal = styled.div`
  font-size: ${textSize.M};
  font-weight: bold;
  margin-bottom: ${size.M};
`;

const CheckoutButton = styled.button`
  background-color: ${colors.quinary};
  border: 1px solid ${colors.quinary};
  padding: ${size.S};
  width: 100%;
  font-size: ${textSize.S};
  cursor: pointer;
`;

export default PriceDetails;
