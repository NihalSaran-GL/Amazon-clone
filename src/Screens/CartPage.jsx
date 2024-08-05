import React from 'react';
import styled from 'styled-components';
import CartItem from '../Components/CartContainer/CartItem';
import PriceDetails from '../Components/CartContainer/PriceDetails';
import Recommendations from '../Components/CartContainer/Recommendations';
import { size, textSize } from "../Components/ReusableComponets/Sizes";
import colors from "../Components/ReusableComponets/Colors";

const ShoppingCart = () => {
  return (
    <CartContainer>
      <CartItems>
        <Title>Shopping Cart</Title>
        <CartItem />
        <PriceDetails />
      </CartItems>
      <Recommendations />
    </CartContainer>
  );
};

const CartContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${colors.primary};
  border-radius: ${size.S};
  box-shadow: 0 ${size.XXS} ${size.XS} rgba(0, 0, 0, 0.1);
`;

const CartItems = styled.div`
  flex: 3;
  padding: ${size.M};
`;

const Title = styled.h2`
  border-bottom: 1px solid ${colors.senary};
  padding-bottom: ${size.S};
  margin-bottom: ${size.M};
`;

export default ShoppingCart;