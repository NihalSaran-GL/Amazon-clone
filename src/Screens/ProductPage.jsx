import React from "react";
import styled from "styled-components";
import {
  sectionSize,
  size,
  textSize,
} from "../Components/ReusableComponets/Sizes";
import colors from "../Components/ReusableComponets/Colors";

const Icon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: ${size.XS};
`;

const Page = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${size.M};
`;

const Breadcrumb = styled.nav`
  font-size: ${textSize.XS};
  margin-bottom: ${size.M};
`;

const ProductContainer = styled.div`
  display: flex;
  gap: ${size.L};
`;

const ImageSection = styled.section`
  flex: 1;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: ${size.XS};
  margin-top: ${size.S};
`;

const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid ${colors.tertiary};
  cursor: pointer;
  border-radius: ${size.XS};
`;

const ProductDetails = styled.section`
  flex: 2;
`;

const ProductTitle = styled.h1`
  font-size: ${textSize.M};
  font-weight: bold;
  margin-bottom: ${size.S};
`;

const PriceSection = styled.div`
  font-size: ${textSize.L};
  margin-bottom: ${size.M};
  margin-top: ${size.M};
`;

const DiscountTag = styled.span`
  background-color: #cc0c39;
  color: ${colors.primary};
  padding: ${size.XXS} ${size.XS};
  font-size: ${textSize.S};
  margin-right: ${size.S};
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: ${colors.quaternary};
  font-size: ${textSize.M};
  margin-left: ${size.XS};
`;

const DeliveryInfo = styled.div`
  font-size: ${textSize.S};
  margin-bottom: ${size.M};
`;

const OfferSection = styled.div`
  margin-bottom: ${size.M};
`;

const OfferContainer = styled.div`
  display: flex;
  gap: ${size.S};
`;

const OfferCard = styled.div`
  border: 1px solid ${colors.tertiary};
  padding: ${size.S};
  border-radius: ${size.XXS};
`;

const FeatureIcons = styled.div`
  display: flex;
  gap: ${size.M};
  margin-bottom: ${size.M};
`;

const ColorOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${size.XS};
`;

const ColorOption = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid ${colors.tertiary};
  cursor: pointer;
  margin-top: ${size.S};
  margin-bottom: ${size.S};
`;

const Button = styled.button`
  padding: ${size.S} ${size.M};
  font-size: ${textSize.M};
  border: none;
  border-radius: ${size.XXS};
  cursor: pointer;
`;

const AddToCartButton = styled(Button)`
  background-color: ${colors.quinary};
  border: none;
  padding: ${size.XS} ${size.S};
  border-radius: ${size.M};
  cursor: pointer;
  font-size: ${textSize.S};
`;

const BuyNowButton = styled(Button)`
  background-color: #ffa41c;
  margin-left: ${size.S};
  border: none;
  padding: ${size.XS} ${size.S};
  border-radius: ${size.M};
  cursor: pointer;
  font-size: ${textSize.S};
`;

const ProductPage = () => {
  const thumbnails = [
    "https://m.media-amazon.com/images/I/31lNkQn-TrL._SS40_.jpg",
    "https://m.media-amazon.com/images/I/31Q6BS+WwLS._SS40_.jpg",
    "https://m.media-amazon.com/images/I/31Wka10rU3S._SS40_.jpg",
    "https://m.media-amazon.com/images/I/41V6kYOAR1S._SS40_.jpg",
    "https://m.media-amazon.com/images/I/31X8ZZVor4S._SS40_.jpg",
    "https://m.media-amazon.com/images/I/51gd4+IVOYS._SS40_.jpg",
  ];

  const colorOptions = [
    { color: "Multi-coloured", image: "https://m.media-amazon.com/images/I/31qv2igcn6S._SS36_.jpg" },
    { color: "Black", image: "https://m.media-amazon.com/images/I/31gxGdOqSdL._SS36_.jpg" },
    { color: "Blue", image: "https://m.media-amazon.com/images/I/31ANThMGYzL._SS36_.jpg" },
    { color: "Red", image: "https://m.media-amazon.com/images/I/41QupojMfcL._SS36_.jpg" },
    { color: "White", image: "https://m.media-amazon.com/images/I/41VrLm8lG1L._SS36_.jpg" },
    // ... add more color options as needed
  ];

  return (
    <Page>
      <Breadcrumb>
        Electronics › Headphones, Earbuds & Accessories › Headphones
      </Breadcrumb>
      <ProductContainer>
        <ImageSection>
          <MainImage
            src="https://m.media-amazon.com/images/I/51tSqBl3+9L._SL1500_.jpg"
            alt="Bluetooth Earphones"
          />
          <ThumbnailContainer>
            {thumbnails.map((thumb, index) => (
              <Thumbnail
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </ThumbnailContainer>
        </ImageSection>
        <ProductDetails>
          <ProductTitle>
            Bluetooth Earphones for Sam-Sung M130K Galaxy K, Sam-Sung M130L
            Galaxy U, Sam-Sung M150, Sam-Sung M190S Galaxy S Hoppin, Sam-Sung
            M210S Wave2 Headphones (LVL12)
          </ProductTitle>
          <PriceSection>
            <DiscountTag>-52%</DiscountTag>
            ₹1,199
            <OriginalPrice>₹2,499</OriginalPrice>
          </PriceSection>
          <DeliveryInfo>
            FREE delivery Sunday, 11 August. Details
            <br />
            Or fastest delivery Saturday, 10 August. Order within 19 hrs 50
            mins. Details
          </DeliveryInfo>
          <OfferSection>
            <h3>Offers</h3>
            <OfferContainer>
              <OfferCard>
                <h4>Bank Offer</h4>
                <p>Upto ₹500.00 discount on SBI Cr...</p>
              </OfferCard>
              <OfferCard>
                <h4>Partner Offers</h4>
                <p>Get GST invoice and save up to 28% on...</p>
              </OfferCard>
            </OfferContainer>
          </OfferSection>
          <FeatureIcons>
            <Icon
              style={{ backgroundImage: "url(path_to_replacement_icon.png)" }}
              title="7 days Replacement"
            />
            <Icon
              style={{ backgroundImage: "url(path_to_delivery_icon.png)" }}
              title="Free Delivery"
            />
            <Icon
              style={{ backgroundImage: "url(path_to_warranty_icon.png)" }}
              title="7 Day Warranty"
            />
            <Icon
              style={{ backgroundImage: "url(path_to_amazon_icon.png)" }}
              title="Amazon Delivered"
            />
          </FeatureIcons>
          <div>
            <h3>Colour: Multi-coloured LVL12</h3>
            <ColorOptions>
              {colorOptions.map((option, index) => (
                <ColorOption
                  key={index}
                  src={option.image}
                  alt={option.color}
                  title={option.color}
                />
              ))}
            </ColorOptions>
          </div>
          <div>
            <AddToCartButton>Add to Cart</AddToCartButton>
            <BuyNowButton>Buy Now</BuyNowButton>
          </div>
        </ProductDetails>
      </ProductContainer>
    </Page>
  );
};

export default ProductPage;
