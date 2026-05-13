import React, { useEffect, useState } from 'react';
import { getPets } from '../../api/petfinder';
import Hero from '../../components/hero';
import { useParams, Link } from 'react-router-dom';

const HomePage = () => {
  const [data, setData] = useState(null);
  const { type } = useParams();

  useEffect(() => {
    async function getPetsData() {
      const petsData = await getPets(type);
      setData(petsData);
    }

    getPetsData();
  }, [type]);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page">
      <Hero />
      <h3>
        <span className="pet-type-label">{type ? `${type}s` : 'Pets'}</span>{' '}
        available for adoption near you
      </h3>

      {data.length ? (
        <div className="grid">
          {data.map((animal) => (
            <Link
              key={animal.id}
              to={`/${animal.type.toLowerCase()}/${animal.id}`}
              className="pet"
            >
              <article>
                <div className="pet-image-container">
                  <img
                    className="pet-image"
                    src={animal.image || '/missing-animal.png'}
                    alt={animal.name}
                  />
                </div>
                <h3>{animal.name}</h3>
                <p>Breed: {animal.breed}</p>
                <p>Location: {animal.location}</p>
                <p>Gender: {animal.gender}</p>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <p className="prompt">No {type}s available for adoption now.</p>
      )}
    </div>
  );
};

export default HomePage;