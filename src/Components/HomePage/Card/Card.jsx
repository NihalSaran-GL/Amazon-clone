import React, { useEffect, useState } from 'react';
import './Card.css';
import { Card, CardContent, Typography } from '@mui/material';

const MyCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cards')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);

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
                <div key={i} className="cardImage">
                  <img className='card-img' src={`/assets/${image.src}`} alt="" />
                  <span className='card-img-des'>{image.description}</span>
                </div>
              ))}
            </div>
            <div className='cardImageContainer'>
              {card.images.slice(2, 4).map((image, i) => (
                <div key={i} className="cardImage">
                  <img className='card-img' src={`/assets/${image.src}`} alt="" />
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
