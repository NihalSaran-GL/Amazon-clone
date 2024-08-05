import React from 'react';
import styled from 'styled-components';
import { size, textSize } from "../ReusableComponets/Sizes";
import colors from "../ReusableComponets/Colors";

const Recommendations = () => {
  return (
    <RecommendationContainer>
      <Title>Customers who bought items in your cart also bought</Title>
      <RecommendationItem>
        <img src="https://via.placeholder.com/50" alt="Recommended Product" />
        <RecommendationDetails>
          <ItemTitle>Van Heusen Men's Solid Polo T Regular Fit Shirt</ItemTitle>
          <ItemPrice>₹799.00</ItemPrice>
        </RecommendationDetails>
      </RecommendationItem>
    </RecommendationContainer>
  );
};

const RecommendationContainer = styled.div`
  flex: 1;
  padding: ${size.M};
  border-left: 1px solid ${colors.senary};
`;

const Title = styled.h3`
  margin-bottom: ${size.M};
`;

const RecommendationItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${size.S};
`;

const RecommendationDetails = styled.div`
  margin-left: ${size.S};
`;

const ItemTitle = styled.div`
  font-size: ${textSize.S};
`;

const ItemPrice = styled.div`
  color: ${colors.quinary};
`;

export default Recommendations;
