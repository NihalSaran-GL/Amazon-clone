import React from "react";
import ProductDetailsCard from "../ReusableComponets/ProductDetailsCard";
import {
  cardStyles,
  titleStyles,
  descriptionStyles,
  priceStyles,
  imageStyles,
  starRatingStyles,
} from "./ProductCategoryMainStyles";

function ProductCategoryMain() {
  const productData = {
    title: "Awesome Product",
    description: "This is a description of an awesome product.",
    price: "$99.99",
    image:
      "https://static.toiimg.com/thumb/msid-107704232,width-1280,height-720,resizemode-4/107704232.jpg",
  };

  return (
    <ProductDetailsCard
      title={productData.title}
      description={productData.description}
      price={productData.price}
      image={productData.image}
      cardStyles={cardStyles}
      titleStyles={titleStyles}
      descriptionStyles={descriptionStyles}
      priceStyles={priceStyles}
      imageStyles={imageStyles}
      starRating={4}
      starRatingStyles={starRatingStyles}
    />
  );
}

export default ProductCategoryMain;
