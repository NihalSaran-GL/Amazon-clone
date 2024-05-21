import React from 'react';
import './Card.css'
import productImage from '../../../assets/productimg.jpg';
import productImage3 from '../../../assets/productimg3.jpg';
import productImage4 from '../../../assets/productimg4.jpg';
import productImage5 from '../../../assets/productimg5.jpg';
import { Card, CardContent, Typography } from '@mui/material';

const MyCard = ({ title, content }) => {
  return (
    <div>
      <Card className="card-over-image">
        <CardContent>
          <Typography className='card-title' variant="h5" component="h2">
            {title}
          </Typography>
          <div className='cardImageContainer'>
            <div className="cardImage"><img className='card-img' src={productImage} alt="" /><span className='card-img-des'>Lorem ipsum dolor sit amet.</span></div>
            <div className="cardImage"><img className='card-img' src={productImage3} alt="" /><span className='card-img-des'>Lorem ipsum dolor sit amet.</span></div>
          </div>
          <div className='cardImageContainer'>
            <div className="cardImage"><img className='card-img' src={productImage4} alt="" /><span className='card-img-des'>Lorem ipsum dolor sit amet.</span></div>
            <div className="cardImage"><img className='card-img' src={productImage5} alt="" /><span className='card-img-des'>Lorem ipsum dolor sit amet.</span></div>
          </div>
        </CardContent>
      </Card>
    </div>

  );
};

export default MyCard;
