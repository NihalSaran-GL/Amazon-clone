import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageCarousel from "../Components/HomeContainer/ImageCarousel";
import CardSlider from "../Components/HomeContainer/CardSlider";
import Card from "../Components/ReusableComponets/Card";
import GridWrapper from "../Components/ReusableComponets/GridWrapper";
import { size, textSize } from "../Components/ReusableComponets/Sizes";
import colors from "../Components/ReusableComponets/Colors";
import categoriesData from "../../public/data/Product.json";


const Container = styled.main`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const images = "https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg "
    .repeat(10)
    .split(" ")
    .slice(0, 10);

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData.CategoryCard);
  }, []);

  const cards = Object.entries(categories).map(([key, category]) => (
    <Card
      key={key}
      title={category.title}
      cardsPerRow={2}
      content={
        <>
          {Object.values(category).map((cat) =>
            typeof cat === "object" ? (
              <ImageWrapper key={cat.id}>
                <img src={cat.image} alt={cat.name} />
                <p>{cat.name}</p>
              </ImageWrapper>
            ) : null
          )}
        </>
      }
      footer={category.footer}
      headerFontSize={textSize.M}
      headerMarginBottom={size.S}
      contentFontSize={textSize.XS}
      contentMarginBottom={size.M}
      footerFontSize={textSize.XXS}
      footerColor={colors.octonary}
      footerTextAlign="left"
      padding={size.M}
      margin={size.XS}
      wrapperBgColor={colors.primary}
    />
  ));


  return (
    <Container>
      <ImageCarousel 
      images={images}
      backgroundColor="lightblue"
      fadeHeight="150px"
      fadeToColor="rgba(173, 216, 230, 1)"
      imageMaxHeight="500px"
      debugMode={true}
      itemsPerPage={{
        md: 1,
        lg: 1,
        xl: 1
      }}
    />
      <GridWrapper columns={"4"}>
        {cards}
      </GridWrapper>
      <CardSlider cards={cards} />
    </Container>
  );
}

export default Home;
