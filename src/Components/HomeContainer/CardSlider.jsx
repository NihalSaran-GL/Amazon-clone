import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SliderContainer = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CardsContainer = styled(motion.div)`
  display: flex;
  width: 100%;
`;

const CardWrapper = styled(motion.div)`
  flex: 0 0 calc(1% / var(--visible-cards));
  padding: 10 1px;
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: black;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  color: white;
  transition: all 0.3s ease;
  z-index: 10;
  border-radius: 50%;

  &:hover, &:focus {
    color: #007bff;
    background: rgba(255, 255, 255, 0.9);
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 0px;
  }
`;

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(8);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1200) setVisibleCards(8);
      else if (window.innerWidth >= 992) setVisibleCards(6);
      else if (window.innerWidth >= 768) setVisibleCards(4);
      else setVisibleCards(2);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCards) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - visibleCards + cards.length) % cards.length);
  };

  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <SliderContainer aria-roledescription="carousel">
      {cards.length > visibleCards && (
        <SliderButton 
          onClick={prevSlide} 
          aria-label="Previous cards"
          className="prev"
        >
          &lt;
        </SliderButton>
      )}
      <CardsContainer 
        as={motion.div}
        animate={{ x: `${-100 * currentIndex / visibleCards}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{ 
          '--visible-cards': visibleCards,
          width: `${(cards.length / visibleCards) * 100}%`
        }}
      >
        {cards.map((card, index) => (
          <CardWrapper key={index}>
            {card}
          </CardWrapper>
        ))}
      </CardsContainer>
      {cards.length > visibleCards && (
        <SliderButton 
          onClick={nextSlide} 
          aria-label="Next cards"
          className="next"
        >
          &gt;
        </SliderButton>
      )}
    </SliderContainer>
  );
};

CardSlider.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CardSlider;