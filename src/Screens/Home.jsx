import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Caraousel from "../Components/HomeContainer/Caraousel";
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

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData.CategoryCard);
  }, []);

  return (
    <Container>
      <Caraousel />
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
                    <div key={cat.id}>
                      <img src={cat.image} alt={cat.name} />
                      <p>{cat.name}</p>
                    </div>
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
    </Container>
  );
}

export default Home;
