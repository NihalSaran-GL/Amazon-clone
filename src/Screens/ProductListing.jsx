import React from "react";
import styled from "styled-components";
import {
  sectionSize,
  size,
  textSize,
} from "../Components/ReusableComponets/Sizes";
import colors from "../Components/ReusableComponets/Colors";
import StarRating from "../Components/ReusableComponets/StarRating";

const FlexContainer = styled.div`
  display: flex;
`;

const Section = styled.section`
  margin-bottom: ${size.L};
`;

const Title = styled.h2`
  font-size: ${textSize.M};
  margin-bottom: ${size.S};
  color: ${colors.quaternary};
`;

const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: ${size.XS};
  font-size: ${textSize.S};
  color: ${colors.quaternary};
`;

const Button = styled.button`
  background-color: ${colors.quinary};
  border: none;
  padding: ${size.XS} ${size.S};
  border-radius: ${size.M};
  cursor: pointer;
  font-size: ${textSize.S};
`;

const ProductCard = styled.article`
  display: flex;
  border: 1px solid ${colors.tertiary};
  padding: ${size.S};
  border-radius: ${size.XS};
  background-color: ${colors.primary};
  align-items: center;
`;

const ProductImageWrapper = styled.div`
  width: 15vh;
  height: 15vh;
  padding: ${size.L};
  background-color: ${colors.tertiary};
  overflow: hidden;
  border-radius: ${size.XS};
  margin-bottom: ${size.S};
  margin-right: ${size.M};
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductTitle = styled.h3`
  font-weight: bold;
  font-size: ${textSize.S};
  margin: ${size.XS} 0;
  color: ${colors.quaternary};
`;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: ${textSize.M};
  margin: ${size.XS} 0;
`;

const ProductNote = styled.p`
  font-size: ${textSize.XS};
  color: ${colors.quaternary};
  margin: ${size.XS} 0;
`;

const Page = styled(FlexContainer)`
  font-family: Arial, sans-serif;
  background-color: ${colors.senary};
`;

const Sidebar = styled.aside`
  width: ${sectionSize.S};
  padding: ${size.M};
  background-color: ${colors.primary};
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${size.M};
`;

const Header = styled.h1`
  font-size: ${textSize.L};
  margin-bottom: ${size.M};
  color: ${colors.secondary};
`;

const PriceRange = styled(FlexContainer)`
  align-items: center;
`;

const PriceInput = styled.input`
  width: ${sectionSize.XXS};
  margin-right: ${size.XS};
  padding: ${size.XXS};
  border: 1px solid ${colors.tertiary};
`;

const ProductGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterSection = ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    {children}
  </Section>
);

const Product = ({ image, title, price, note }) => (
  <ProductCard>
    <ProductImageWrapper>
      <ProductImage src={image} alt={title} />
    </ProductImageWrapper>
    <div>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>
      {note && <ProductNote>{note}</ProductNote>} {/* Display note if provided */}
      <StarRating starRating={4} />
      <Button>Add to cart</Button>
    </div>
  </ProductCard>
);

const ProductListing = () => {
  return (
    <Page>
      <Sidebar>
        <FilterSection title="Delivery Day">
          <CheckboxLabel>
            <input type="checkbox" /> Get It Today
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Get It by Tomorrow
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Get It in 2 Days
          </CheckboxLabel>
        </FilterSection>

        <FilterSection title="Category">
          <CheckboxLabel>
            <input type="checkbox" checked /> Smartphones & Basic Mobiles
          </CheckboxLabel>
        </FilterSection>

        <FilterSection title="Customer Review">
          <CheckboxLabel>
            <input type="checkbox" /> 1 Star & Up
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> 2 Stars & Up
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> 3 Stars & Up
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> 4 Stars & Up
          </CheckboxLabel>
        </FilterSection>

        <FilterSection title="Brands">
          <CheckboxLabel>
            <input type="checkbox" /> Redmi
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Samsung
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> OnePlus
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Apple
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Xiaomi
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Oppo
          </CheckboxLabel>
        </FilterSection>

        <FilterSection title="Price">
          <PriceRange>
            <PriceInput type="number" placeholder="₹205" />
            <span>-</span>
            <PriceInput type="number" placeholder="₹102,900+" />
            <Button>Go</Button>
          </PriceRange>
        </FilterSection>
      </Sidebar>

      <MainContent>
        <Header>Results</Header>
        <p style={{marginBottom: size.S}}>Check each product page for other buying options.</p>

        <ProductGrid>
          <Product
            image="https://m.media-amazon.com/images/I/51Zjp5fq1EL.AC_UY218.jpg"
            title="HMD Crest Max 5G | Segment 1st 50 MP Front Cam | Triple Rear AI Cam with 64 MP Primary Sony Sensor | FHD+ OLED Display | 8 GB RAM & 256 GB Storage | Android 14 | 33W Fast Charger in Box |..."
            price="₹16,499"
            note="Additional Flat discount 50"
          />
          <Product
            image="https://m.media-amazon.com/images/I/81Z1scL6HvL.AC_UY218.jpg"
            title="Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB Storage) | 5G Ready | 120Hz Bezel-Less AMOLED | 7.7mm Slimmest Note Ever | 108MP Pro-Grade Camera"
            price="₹16,999"
            note="Limited time offer"
          />
        </ProductGrid>
      </MainContent>
    </Page>
  );
};

export default ProductListing;
