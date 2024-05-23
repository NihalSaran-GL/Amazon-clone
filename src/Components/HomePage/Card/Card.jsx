import React, { useEffect, useState } from 'react';
import './Card.css';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyCard = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/cards')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCards(data))
      .catch(() => {
        // Fallback to dummy data if API call fails
        setCards([
          {
            title: 'Card Title 1- Fallback Data',
            images: [
              { src: "productimg.jpg", description: "Lorem ipsum dolor sit amet." },
              { src: "productimg3.jpg", description: "Lorem ipsum dolor sit amet." },
              { src: "productimg4.jpg", description: "Lorem ipsum dolor sit amet." },
              { src: "productimg5.jpg", description: "Lorem ipsum dolor sit amet." },
            ]
          },
          {
            title: "Card Title 2- Fallback Data",
            images: [
              { src: "productimg3.jpg", description: "Lorem ipsum dolor sit amet." },
              { src: "productimg4.jpg", description: "Lorem ipsum dolor sit amet." },
              { src: "productimg5.jpg", description: "Lorem ipsum dolor sit amet." },
              { src: "productimg.jpg", description: "Lorem ipsum dolor sit amet." },
            ]
          },
          {
            title: "Card Title 3- Fallback Data",
            images: [
              { src: "productimg4.jpg", description: "Lorem ipsum dolor sit amet." },
              { src: "productimg5.jpg", description: "Lorem ipsum dolor sit amet." },
              { src: "productimg.jpg", description: "Lorem ipsum dolor sit amet." },
              { src: "productimg3.jpg", description: "Lorem ipsum dolor sit amet." },
            ]
          },
          {
            title: "Card Title 4- Fallback Data",
            images: [
              { "src": "productimg5.jpg", description: "Lorem ipsum dolor sit amet." },
              { "src": "productimg.jpg", description: "Lorem ipsum dolor sit amet." },
              { "src": "productimg3.jpg", description: "Lorem ipsum dolor sit amet." },
              { "src": "productimg4.jpg", description: "Lorem ipsum dolor sit amet." },
            ]
          }
        ])
      });
  }, []);

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
                  <img className='card-img' src={`${image.src}`} alt="" />
                  <span className='card-img-des'>{image.description}</span>
                </div>
              ))}
            </div>
            <div className='cardImageContainer'>
              {card.images.slice(2, 4).map((image, i) => (
                <div key={i} className="cardImage" onClick={() => handleImageClick(image.src)}>
                  <img className='card-img' src={`${image.src}`} alt="" />
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
