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
  background-color: yellow; /* Add a light blue background for debugging */
  align-items: center;
  position: relative; /* Ensure the container can hold absolute positioned elements */

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px; /* Adjust the height to control the fade effect area */
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); /* Change to match the container's background */
    pointer-events: none; /* Allows clicks to pass through */
  }
`;

const StyledImage = styled.img`
  max-height: 600px;
  object-fit: cover; /* Cover the container without stretching the image */
  border: 2px solid blue; /* Add a blue border for debugging */
  background-color: lightblue; /* Add a light blue background for debugging */
`;

function App() {
  const srcList = "https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg "
    .repeat(10)
    .split(" ")
    .slice(0, 10)
    .map((src, index) => ({ id: `image-${index}`, src }));

  return (
    <StyledContainer>
      <main>
        <Carousel
          items={srcList}
          itemsPerPage={{
            xs: 1,
            sm: 1,
            tablet: 1,
            md: 1,
            lg: 1,
            xl: 1
          }}
          itemRenderer={(item) => (
            <StyledImage key={item.id} src={item.src} alt={`Image ${item.id}`} />
          )}
          maxContainerWidth={theme.breakpoints.values["lg"]}
        />
      </main>
    </StyledContainer>
  );
}

export default App;