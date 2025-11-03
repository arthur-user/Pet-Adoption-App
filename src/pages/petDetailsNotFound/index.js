import React from 'react';
import { useNavigate } from 'react-router-dom';

const PetDetailsNotFound = () => {

  // navigate function from useNavigate
  const navigate = useNavigate();

  const goHome = () => {
    // home
    navigate('/')
  }
  
  return (
    <main className="page">
      <h3>404: Who let the dogs out?</h3>
      <p>We’re sorry, this pet’s details haven’t been uploaded by the shelter yet. Please check back soon for updates!</p>
      <img
        src="https://i.chzbgr.com/full/8362031616/h9EB970C5/weve-lost-our-corgination"
        alt=""
      />
      <div className="actions-container">
        <button className="button" onClick={goHome}>
          Go Home
        </button>
      </div>
    </main>
  );
};

export default PetDetailsNotFound;
