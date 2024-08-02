import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import ImageCarousel from "../Components/HomeContainer/ImageCarousel";
import CardSlider from "../Components/HomeContainer/CardSlider";
import Card from "../Components/ReusableComponets/Card";
import GridWrapper from "../Components/ReusableComponets/GridWrapper";
import ProductCard from "../Components/ReusableComponets/ProductCard";
import { size, textSize } from "../Components/ReusableComponets/Sizes";
import colors from "../Components/ReusableComponets/Colors";

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
    const [categories, setCategories] = useState({});
    const [sliderCategories, setSliderCategories] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const cardDataDoc = await getDoc(doc(db, "productdata", "ProductData"));
          const sliderDataDoc = await getDoc(doc(db, "productdata", "SliderData"));
  
          if (cardDataDoc.exists()) {
            const data = cardDataDoc.data();
            setCategories(data.CategoryCard);
          } else {
            console.log("No CardData document!");
          }
  
          if (sliderDataDoc.exists()) {
            const data = sliderDataDoc.data();
            setSliderCategories(data.SliderCards || {});
          } else {
            console.log("No SliderData document!");
          }
        } catch (error) {
          console.error("Error fetching data from Firestore:", error);
        }
      };
  
      fetchData();
    }, []);
  
    const cards = Object.entries(categories).map(([key, category]) => (
      <Card
        key={key}
        title={category.title}
        cardsPerRow={2}
        content={
          <>
            {Object.entries(category).map(([catKey, cat]) =>
              catKey.startsWith('category') && typeof cat === "object" ? (
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
        width={"320px"}
      />
    ));
  
    const sliderCards = useMemo(() => {
      return Object.values(sliderCategories).map((category, index) => (
        <Card
          key={index}
          content={
            <ProductCard
              image={category.image}
              title={category.title}
              price={category.price}
              stars={category.stars}
              note={category.note}
              deliveryDate={category.deliveryDate}
            />
          }
          contentMarginBottom={size.XXS}
          padding={size.S}
          margin={size.XS}
          wrapperBgColor={colors.primary}
          width={"200px"}
          gap={size.XXS}
        />
      ));
    }, [sliderCategories]);
  
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
        <CardSlider cards={sliderCards} />
        <GridWrapper columns={"4"}>
          {cards}
        </GridWrapper>
        <CardSlider cards={sliderCards} />
      </Container>
    );
  }
  
  export default Home;