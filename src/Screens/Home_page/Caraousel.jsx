import React from "react";
import styled from "styled-components";
import Carousel from "react-carousel-mui";
import theme from "./theme";

const StyledContainer = styled.section`
  max-width: 100%;
  height: auto; // Adjust this to a specific value or use max-height
  margin: auto;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-height: 700px;
  object-fit: cover; /* Cover the container without stretching the image */
  border: 2px solid blue; /* Add a blue border for debugging */
  background-color: lightblue; /* Add a light blue background for debugging */
`;

function App() {
  const srcList = "https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg "
    .repeat(10)
    .split(" ")
    .slice(0, 10);

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
          itemRenderer={(item) => <StyledImage src={item} alt="" />}
          maxContainerWidth={theme.breakpoints.values["lg"]}
        />
      </main>
    </StyledContainer>
  );
}

export default App;