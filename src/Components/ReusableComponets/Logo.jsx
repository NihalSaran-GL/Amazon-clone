import React from "react";

function Logo({ image, text }) {
  return (
    <>
      <img src={image} alt={text} />
      <h1>{text}</h1>
    </>
  );
}

export default Logo;
