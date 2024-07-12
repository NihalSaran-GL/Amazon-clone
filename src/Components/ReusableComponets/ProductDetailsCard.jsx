import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  border: ${(props) => props.border || '1px solid black'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  padding: ${(props) => props.padding || '16px'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  box-shadow: ${(props) => props.boxShadow || '0'};
  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || 'auto'};
  margin: ${(props) => props.margin || '16px'};
`;

const Title = styled.h2`
  font-size: ${(props) => props.fontSize || '1.5em'};
  margin-bottom: ${(props) => props.marginBottom || '0.5em'};
  color: ${(props) => props.color || '#333'};
`;

const Description = styled.p`
  font-size: ${(props) => props.fontSize || '1em'};
  color: ${(props) => props.color || '#666'};
`;

const Price = styled.p`
  font-size: ${(props) => props.fontSize || '1.2em'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  color: ${(props) => props.color || '#e91e63'};
  margin-top: ${(props) => props.marginTop || '1em'};
`;

const Image = styled.img`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  object-fit: ${(props) => props.objectFit || 'cover'};
  margin-bottom: ${(props) => props.marginBottom || '0.5em'};
`;

const StarRating = styled.div`
  display: flex;
  margin-top: ${(props) => props.marginTop || '0.5em'};
  color: ${(props) => props.color || '#ffc107'};
`;

const Star = styled.span`
  font-size: ${(props) => props.fontSize || '1.2em'};
  margin-right: ${(props) => props.marginRight || '0.1em'};
`;

const ProductDetailsCard = ({
  title,
  description,
  price,
  image,
  starRating,
  cardStyles,
  titleStyles,
  descriptionStyles,
  priceStyles,
  imageStyles,
  starRatingStyles,
}) => {
  const renderStars = () => {
    if (!starRating) return null;
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} {...starRatingStyles}>
        {index < starRating ? '★' : '☆'}
      </Star>
    ));
  };

  return (
    <Card {...cardStyles}>
      <Image {...imageStyles} src={image} alt={title} />
      <Title {...titleStyles}>{title}</Title>
      <Description {...descriptionStyles}>{description}</Description>
      <Price {...priceStyles}>{price}</Price>
      <StarRating {...starRatingStyles}>
        {renderStars()}
      </StarRating>
    </Card>
  );
};

export default ProductDetailsCard;
