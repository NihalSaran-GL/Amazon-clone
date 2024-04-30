// ImageCarousel.jsx
import React from 'react';
import MyCard from './Card';
import Imagecarousel from './Imagecarousel';
import './Home.css'; // Import CSS file for styling
import ImageCarousel from './Imagecarousel1';
  




function Home() {
  return (
    <div>
      <Imagecarousel />
      <div className="card-grid">
        
        <MyCard title="Another Card" content="This is another card." />
      </div>
      
    </div>
  );
} 

export default Home;
