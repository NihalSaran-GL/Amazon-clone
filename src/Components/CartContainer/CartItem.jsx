import React from 'react';
import styled from 'styled-components';
import { size, textSize } from "../ReusableComponets/Sizes";
import colors from "../ReusableComponets/Colors";

const CartItem = () => {
  return (
    <ItemContainer>
      <ImageContainer>
        <img src="https://via.placeholder.com/100" alt="Product" />
      </ImageContainer>
      <ItemDetails>
        <ItemTitle>Allen Solly Men Jet Black Regular Fit Polo</ItemTitle>
        <ItemInfo>Size: L</ItemInfo>
        <ItemInfo>Colour: Jet Black</ItemInfo>
        <Quantity>
          <select>
            <option value="1">1</option>
          </select>
          <ItemActions>
            <Action>Delete</Action>
            <Action>Save for later</Action>
            <Action>See more like this</Action>
          </ItemActions>
        </Quantity>
        <ItemPrice>₹798.00</ItemPrice>
      </ItemDetails>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.senary};
  padding: ${size.S} 0;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const ItemDetails = styled.div`
  flex: 3;
  padding-left: ${size.M};
`;

const ItemTitle = styled.div`
  font-size: ${textSize.M};
  font-weight: bold;
  margin-bottom: ${size.XS};
`;

const ItemInfo = styled.div`
  color: ${colors.tertiary};
  margin-bottom: ${size.S};
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const ItemActions = styled.div`
  margin-left: ${size.M};
`;

const Action = styled.span`
  margin-right: ${size.S};
  color: ${colors.octonary};
  cursor: pointer;
`;

const ItemPrice = styled.div`
  font-size: ${textSize.L};
  font-weight: bold;
  color: ${colors.quinary};
  margin-top: ${size.S};
`;

export default CartItem;
