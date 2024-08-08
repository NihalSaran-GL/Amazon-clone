import React from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const product = location.state?.product; // Fetch product data from state

  if (!product) {
    return <p>Product not found.</p>;
  }

  const thumbnails = product.thumbnails || [];
  const colorOptions = product.colorOptions || [];

  return (
    <Page>
      <Breadcrumb>
        Electronics › Headphones, Earbuds & Accessories › Headphones
      </Breadcrumb>
      <ProductContainer>
        <ImageSection>
          <MainImage src={product.imageUrl} alt={product.name} />
          <ThumbnailContainer>
            {thumbnails.map((thumb, index) => (
              <Thumbnail key={index} src={thumb} alt={`Thumbnail ${index + 1}`} />
            ))}
          </ThumbnailContainer>
        </ImageSection>
        <ProductDetails>
          <ProductTitle>{product.name}</ProductTitle>
          <PriceSection>
            {product.discount && <DiscountTag>{product.discount}</DiscountTag>}
            ₹{product.price}
            {product.originalPrice && <OriginalPrice>₹{product.originalPrice}</OriginalPrice>}
          </PriceSection>
          <DeliveryInfo>
            {product.deliveryInfo}
          </DeliveryInfo>
          <OfferSection>
            <h3>Offers</h3>
            <OfferContainer>
              {product.offers && product.offers.map((offer, index) => (
                <OfferCard key={index}>
                  <h4>{offer.title}</h4>
                  <p>{offer.description}</p>
                </OfferCard>
              ))}
            </OfferContainer>
          </OfferSection>
          <FeatureIcons>
            {product.features && product.features.map((feature, index) => (
              <Icon
                key={index}
                style={{ backgroundImage: `url(${feature.icon})` }}
                title={feature.title}
              />
            ))}
          </FeatureIcons>
          <div>
            <h3>Colour: {product.color}</h3>
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
