import React, { useContext, useState } from "react";
import { petsListingContext } from "../PetContext";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Home = () => {
  const {
    petList,
    handleImage,
    setLocation,
    setAnimal,
    setBreed,
    error,
    setError,
    loading,
  } = useContext(petsListingContext);
  const [animalInput, setAnimalInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [breedInput, setBreedInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  
    if (animalInput !== "" || breedInput !== "" || locationInput !== "") {
      setAnimal(animalInput);
      setLocation(locationInput);
      setBreed(breedInput);
      setError('')
    } else {
      setError("Sorry, No pets are Found");
    }
  };
  return (
    <div className="homepage">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="pets-data">
          <form>
            <label>
              Animal:
              <input
                type="text"
                value={animalInput}
                onChange={(e) => setAnimalInput(e.target.value)}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
              />
            </label>
            <label>
              Breed:
              <input
                type="text"
                value={breedInput}
                onChange={(e) => setBreedInput(e.target.value)}
              />
            </label>
            
          </form>
          <button className="btn" onClick={handleSearch}>Search</button>
          {error && <p>{error}</p>}
          <div className="petsList">
            {petList.map((pets) => (
              <div key={pets.id} className="pets">
                <h3>{pets.name}</h3>
                <img
                  src={pets.images[0]}
                  alt={pets.name}
                  style={{ width: "150px", margin: "5px" }}
                  onClick={() => handleImage(pets, pets.id)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
