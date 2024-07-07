import React from "react";
import styled from "styled-components";
import Caraousel from "../Components/HomeContainer/Caraousel";
import Card from "../Components/ReusableComponets/Card";
import GridWrapper from "../Components/ReusableComponets/GridWrapper";

const Container = styled.main``;

function Home() {

  return (
    <Container>
      <Caraousel></Caraousel>
      <GridWrapper  columns={"4"}>
        <Card
          title="Card Title"
          content="Card Content"
          footer="Card Footer"
        ></Card>
        <Card
          title="Card Title"
          content="Card Content"
          footer="Card Footer"
        ></Card>
        <Card
          title="Card Title"
          content="Card Content"
          footer="Card Footer"
        ></Card>
        <Card
          title="Card Title"
          content="Card Content"
          footer="Card Footer"
        ></Card>
        <Card
          title="Card Title"
          content="Card Content"
          footer="Card Footer"
        ></Card>
        <Card
          title="Card Title"
          content="Card Content"
          footer="Card Footer"
        ></Card>
      </GridWrapper>
    </Container>
  );
}

export default Home;
