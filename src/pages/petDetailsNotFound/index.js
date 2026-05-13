import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";



const LazyDogGif = React.lazy(() => import('./LazyDogGif'));


const PetDetailsNotFound = () => {
  // navigate function from useNavigate
  const navigate = useNavigate();

  const goHome = () => {
    // home
    navigate("/");
  };

  return (
    <main className="page" style={{ textAlign: 'center' }}>
      <h3>404: Who let the dogs out?</h3>
      <p>
        We’re sorry, this pet’s details haven’t been uploaded by the shelter
        yet. Please check back soon for updates!
      </p>
        <Suspense fallback={<p>Loading animation...</p>}>
        <LazyDogGif />
      </Suspense>
      
      
      
      <div className="actions-container">
        <button className="button" onClick={goHome}>
          Go Home
        </button>
      </div>
    </main>
  );
};

export default PetDetailsNotFound;
