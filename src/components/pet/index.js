import React from 'react';
import { Link } from 'react-router-dom';

const Pet = ({ animal }) => {
  return (
    <Link
      key={animal.id}
      href={`/${animal.type.toLowerCase()}/${animal.id}`}
      className="pet"
    >
   <article>
        <div className="pet-image-container">
          <img
            className="pet-image"
            src={animal.image || 'https://i.imgur.com/aEcJUFK.png'}
            alt={animal.name}
          />
        </div>
        <h3>{animal.name}</h3>
        <p>Breed: {animal.breed}</p>
        <p>Gender: {animal.gender}</p>
        <p>Location: {animal.location}</p>
      </article>
    </Link>
  );
};

export default Pet;
