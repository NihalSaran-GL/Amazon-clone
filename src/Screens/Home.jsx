import React from "react";
import styled from "styled-components";
import Caraousel from "../Components/HomeContainer/Caraousel/Caraousel";
import Card from "../Components/ReusableComponets/Card";
import ParentCard from "../Components/ReusableComponets/ParentCard";
import GridWrapper from "../Components/ReusableComponets/GridWrapper";

const Container = styled.main`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
`;

function Home() {
  return (
    <Container>
      <Caraousel></Caraousel>
      <GridWrapper  columns={"4"}>
     
      <ParentCard
          title="Appliances for your home | Up to 55% off"
          items={[
            { 
              imageSrc: "https://static.toiimg.com/thumb/msid-107704232,width-1280,height-720,resizemode-4/107704232.jpg",
              caption: "Air Conditioners"
            },
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
              caption: "Refrigerators"
            },
            {
              imageSrc: "https://static.toiimg.com/thumb/msid-109622405,width-1070,height-580,imgsize-48424,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              caption: "washing Machines"
            },
            {
              imageSrc: "https://www.lg.com/content/dam/channel/wcms/in/images/microwave-ovens/mc2146br_dbkqiln_eail_in_c/gallery/MC2146BR-Microwave-ovens-Front-view-DZ-01.jpg",
              caption: "Microwave Ovens"
            },
          ]}
          seeMoreText="See more images"
        />
        <ParentCard
          title="Revamp your home in style"
          items={[
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
              caption: "Cushion Covers, bedsheets & more"
            },
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg",
              caption: "Figurines, vases & more"
            },
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg",
              caption: "Home Storage"
            },
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
              caption: "Lighting solutions"
            },
          ]}
          seeMoreText="Explore all"
        />
        <ParentCard
          title="Starting ₹149 | Headphones"
          items={[
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt._SY232_CB553870684_.jpg",
              caption: "Starting ₹149 | boAt"
            },
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult._SY232_CB553870684_.jpg",
              caption: "Starting ₹149 | Boult"
            },
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise._SY232_CB553870684_.jpg",
              caption: "Starting ₹149 | Noise"
            },
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Zeb._SY232_CB553870684_.jpg",
              caption: "Starting ₹149 | Zebronics"
            },
          ]}
          seeMoreText="See all offers"
        />
        <ParentCard
          title="Automotive essentials | Up to 60% off"
          items={[
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare2x._SY232_CB410830552_.jpg",
              caption: "  Cleaning accessories"
            },
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare2x._SY232_CB410830552_.jpg",
              caption: "Tyre & Rim care"
            },
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_372x232._SY232_CB405083904_.jpg",
              caption: "Helmets"
            },
            {
              imageSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum2x._SY232_CB410830555_.jpg",
              caption: "Vacuum Cleaners"
            },
          ]}
          seeMoreText="See more"
        />

      </GridWrapper>
    </Container>
  );
}

export default Home;
