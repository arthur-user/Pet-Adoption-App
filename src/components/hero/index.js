import React from 'react';

const Hero = ({ image, displayText }) => {
  const type = '';

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.56), rgba(0,0,0,0.56)), url("${
          image || 'pets-hero.png'
        }")`,
        backgroundBlendMode: 'overlay', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0000008f',
      }}
    >
      <h2>{displayText || getHeroTitle(type)}</h2>
    </div>
  );
};

export default Hero;

const getHeroTitle = (type) => {
  switch (type) {
    case 'dog':
      return 'Dogs';
    case 'cat':
      return 'Cats';
    case 'rabbit':
      return 'Rabbits';
    case 'bird':
      return 'Birds';
    default:
      return 'Find your perfect pet';
  }
};
