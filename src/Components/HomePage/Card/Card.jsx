import React, { useEffect, useState } from 'react';
import './Card.css';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyCard = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://vbcm7hql-3001.inc1.devtunnels.ms/cards')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);

  // Function to handle image click and navigate to product page
  const handleImageClick = (imageName) => {
    navigate(`/product/${imageName}`);
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index} className="card-over-image">
          <CardContent>
            <Typography className='card-title' variant="h5" component="h2">
              {card.title}
            </Typography>
            <div className='cardImageContainer'>
              {card.images.slice(0, 2).map((image, i) => (
                <div key={i} className="cardImage" onClick={() => handleImageClick(image.src)}>
                  <img className='card-img' src={`/Amazon-clone/assets/${image.src}`} alt="" />
                  <span className='card-img-des'>{image.description}</span>
                </div>
              ))}
            </div>
            <div className='cardImageContainer'>
              {card.images.slice(2, 4).map((image, i) => (
                <div key={i} className="cardImage" onClick={() => handleImageClick(image.src)}>
                  <img className='card-img' src={`/Amazon-clone/assets/${image.src}`} alt="" />
                  <span className='card-img-des'>{image.description}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MyCard;
