// ImageCarousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css'; // Import CSS file for styling

function ImageCarousel() {
  return (
    <div className="carousel-container"> {/* Apply a class to the container */}
      <Carousel className="custom-carousel"> {/* Apply a class to the Carousel component */}
        <div>
          <img src="https://m.media-amazon.com/images/I/61P7hqIHrdL._SX3000_.jpg" alt="Carousel 1" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="Carousel 2" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="Carousel 3" />
        </div>
      </Carousel>
    </div>
  );
} 

export default ImageCarousel;
