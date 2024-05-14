import React from 'react';
import MyCard from './Card/Card';
import Imagecarousel from './ImageCarousel/Imagecarousel';
import './Home.css';
import ImageCarousel from './ImageCarousel/Imagecarousel1';
import { Footer } from '../Footer/Footer';
import { FooterBottom } from '../Footer/FooterBottom/FooterBottom';
import { Slider1 } from './Slider1/slider1';
import {Slider2} from './Slider2/slider2'
import {Slider3} from './Slider3/slider3'
import {FooterSignIn} from '../Footer/FooterSignIn/FooterSignIn'


function Home() {
  return (
    <div>
      <Imagecarousel />
      <div className="card-grid">
        <MyCard title="Another Card" content="This is another card." />
      </div>
      <Slider1 />
      <Slider2 />
      <Slider3 />
      <FooterSignIn />
      <Footer/>
      <FooterBottom/>
    </div>
  );
} 

export default Home;
