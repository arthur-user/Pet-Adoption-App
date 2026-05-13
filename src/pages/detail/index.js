import React, { useEffect, useState } from "react";
import { getPetDetails } from "../../api/petfinder";
import Hero from "../../components/hero";
import { useParams, Navigate } from "react-router-dom";

const PetDetailsPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getPetsData() {
      try {
        const petsData = await getPetDetails(Number(id));
        if (!petsData) throw new Error("Pet not found");
        setData(petsData);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }

    getPetsData();
  }, [id]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <Navigate to="/pet-details-not-found" />;

  return (
    <main>
      <Hero
        image={data.image || "https://i.imgur.com/aEcJUFK.png"}
        displayText={`Meet ${data.name}`}
      />
      <div className="pet-detail">
        <div className="pet-image-container">
          <img
            className="pet-image"
            src={data.image || "https://i.imgur.com/aEcJUFK.png"}
            alt={data.name}
          />
        </div>
        <div>
          <h1>{data.name}</h1>
          <h3>Breed: {data.breed}</h3>
          <p>Gender: {data.gender}</p>
          <p>Age: {data.age}</p>
          <p>Size: {data.size}</p>
          <p>Location: {data.location}</p>
          <ul>
            <li>Vaccinated: {data.vaccinated ? "Yes" : "No"}</li>
            <li>House Trained: {data.houseTrained ? "Yes" : "No"}</li>
            <li>
              Good with Kids:{" "}
              {data.goodWithKids === null ? "Unknown" : data.goodWithKids ? "Yes" : "No"}
            </li>
            <li>
              Good with Dogs:{" "}
              {data.goodWithDogs === null ? "Unknown" : data.goodWithDogs ? "Yes" : "No"}
            </li>
            <li>
              Good with Cats:{" "}
              {data.goodWithCats === null ? "Unknown" : data.goodWithCats ? "Yes" : "No"}
            </li>
          </ul>
          <h3>Description</h3>
          <p>{data.description || "No description available."}</p>
        </div>
      </div>
    </main>
  );
};

export default PetDetailsPage;