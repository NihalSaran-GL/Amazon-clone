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

const StyledCard = styled.article`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5px;
`;

const CardTitle = styled.h2`
  color: #333;
  margin-bottom: 5px;
  font-size: 1rem;
`;

const CardContent = styled.p`
  color: #666;
  font-size: 0.8rem;
`;



const imagess = [
  'assets/productimg.jpg',
  'assets/productimg2.jpg',
  'assets/productimg3.jpg',
  'assets/productimg4.jpg',
  // Add more image URLs here
];

const Cardd = ({ title, content }) => (
  <StyledCard>
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
  </StyledCard>
);

const images = "https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg "
    .repeat(10)
    .split(" ")
    .slice(0, 10);

    

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData.CategoryCard);
  }, []);

  const cards = Array.from({ length: 20 }, (_, i) => (
    <Cardd key={i + 1} title={`Card ${i + 1}`} content={`Content ${i + 1}`} />
  ));


  return (
    <Container>
      <ImageCarousel 
      images={images}
      backgroundColor="lightblue"
      fadeHeight="150px"
      fadeToColor="rgba(173, 216, 230, 1)" // Light blue
      imageMaxHeight="500px"
      debugMode={true}
      itemsPerPage={{
        md: 1,
        lg: 1,
        xl: 1
      }}
    />
      <GridWrapper columns={"4"}>
        {Object.entries(categories).map(([key, category]) => (
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
        ))}
      </GridWrapper>
      <CardSlider cards={cards} />
    </Container>
  );
}

export default Home;
