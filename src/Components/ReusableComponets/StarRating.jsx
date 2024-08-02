import React from "react";
import styled from "styled-components";

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Star = styled.span`
  color: gold;
  font-size: 1.2em;
`;

const StarRating = ({ starRating }) => {
  const renderStars = () => {
    if (!starRating) return null;
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index}>{index < starRating ? '★' : '☆'}</Star>
    ));
  };

  return <StarWrapper>{renderStars()}</StarWrapper>;
};

export default StarRating;
