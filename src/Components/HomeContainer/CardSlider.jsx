import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200%;
  margin: 0 auto;
`;

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const CardWrapper = styled.div`
  flex: 0 0 calc(100% / 8);
  transition: transform 0.3s ease;
`;

const SliderButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  color: #333;
  transition: color 0.3s ease;

  &:hover, &:focus {
    color: #007bff;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    updateVisibleCards();
  }, [currentIndex, cards]);

  const updateVisibleCards = () => {
    const newVisibleCards = [];
    for (let i = 0; i < 8; i++) {
      const index = (currentIndex + i) % cards.length;
      newVisibleCards.push(cards[index]);
    }
    setVisibleCards(newVisibleCards);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <SliderContainer aria-roledescription="carousel">
      <SliderButton 
        onClick={prevSlide} 
        aria-label="Previous card"
      >
        &lt;
      </SliderButton>
      <CardsContainer 
        role="group" 
        aria-roledescription="slide"
        aria-label={`Card ${currentIndex + 1} of ${cards.length}`}
      >
        {visibleCards.map((card, index) => (
          <CardWrapper key={index}>
            {card}
          </CardWrapper>
        ))}
      </CardsContainer>
      <SliderButton 
        onClick={nextSlide} 
        aria-label="Next card"
      >
        &gt;
      </SliderButton>
    </SliderContainer>
  );
};

CardSlider.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CardSlider;