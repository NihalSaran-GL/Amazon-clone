// ImageCarousel.jsx
import React from 'react';
import MyCard from './Card';
import Imagecarousel from './Imagecarousel';
import './Home.css'; // Import CSS file for styling
import ImageCarousel from './Imagecarousel1';
import { Footer } from '../Footer/Footer';
import { FooterBottom } from '../Footer/FooterBottom/FooterBottom';
  




function Home() {
  return (
    <div>
      <Imagecarousel />
      <div className="card-grid">
        
        <MyCard title="Another Card" content="This is another card." />
      </div>
      <Footer/>
      <FooterBottom/>
    </div>
  );
} 

export default Home;
