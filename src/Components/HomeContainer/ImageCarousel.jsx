import React from "react";
import styled from "styled-components";
import Carousel from "react-carousel-mui";
import theme from "./theme";

const StyledContainer = styled.section`
  max-width: 100%;
  height: auto;
  margin: auto;
  padding: 0px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.backgroundColor || 'yellow'};
  align-items: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${props => props.fadeHeight || '200px'};
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, ${props => props.fadeToColor || 'rgba(255,255,255,1)'} 100%);
    pointer-events: none;
  }
`;

const StyledImage = styled.img`
  max-height: ${props => props.maxHeight || '600px'};
  object-fit: cover;
  border: ${props => props.debugBorder ? '2px solid blue' : 'none'};
  background-color: ${props => props.debugBackground ? 'lightblue' : 'transparent'};
`;

const defaultItemsPerPage = {
  xs: 1,
  sm: 1,
  tablet: 1,
  md: 1,
  lg: 1,
  xl: 1
};

function ImageCarousel({
  images,
  backgroundColor,
  fadeHeight,
  fadeToColor,
  imageMaxHeight,
  debugMode = false,
  itemsPerPage = {},
  maxContainerWidth = theme.breakpoints.values["lg"]
}) {
  // Merge the default itemsPerPage with the provided itemsPerPage
  const mergedItemsPerPage = { ...defaultItemsPerPage, ...itemsPerPage };

  return (
    <StyledContainer 
      backgroundColor={backgroundColor}
      fadeHeight={fadeHeight}
      fadeToColor={fadeToColor}
    >
      <main>
        <Carousel
          items={images}
          itemsPerPage={mergedItemsPerPage}
          itemRenderer={(item) => (
            <StyledImage 
              src={item} 
              alt="" 
              maxHeight={imageMaxHeight}
              debugBorder={debugMode}
              debugBackground={debugMode}
            />
          )}
          maxContainerWidth={maxContainerWidth}
        />
      </main>
    </StyledContainer>
  );
}

export default ImageCarousel;