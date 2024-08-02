import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating"; // Adjust the path if necessary
import colors from "./Colors";
import { textSize } from "./Sizes";

const ProductImage = styled.img`
  margin-bottom: 10px;
`;

const ProductTitle = styled.p`
  color: ${colors.octonary};
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: ${textSize.S};
`;

const ProductNote = styled.p`
  font-size: ${textSize.XXS};
`;

const ProductDeliveryDate = styled.p`
  font-size: ${textSize.XXS};
`;

const ProductCard = ({ image, title, price, stars, note, deliveryDate }) => (
  <>
    <ProductImage src={image} alt={title} />
    <ProductTitle>{title}</ProductTitle>
    <ProductPrice>{price}</ProductPrice>
    <StarRating starRating={stars} />
    <ProductNote>{note}</ProductNote>
    <ProductDeliveryDate>{deliveryDate}</ProductDeliveryDate>
  </>
);

export default ProductCard;
