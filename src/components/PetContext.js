import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const petsListingContext = createContext();
const PetContext = (props) => {
  const [petList, setPetList] = useState([]);
  const [selectpets, setSelectPets] = useState(null);
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function fetchPetsData() {
    setLoading(true);
    try {
      const response = await fetch(`http://pets-v2.dev-apis.com/pets`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to fetch pets data");
      }
      setPetList(data.pets);
      setLoading(false);
    } catch (err) {
      setError("no data found");
      console.log(err);
      setLoading(false);
    }
  }

  async function searchTypes() {
    setLoading(true);
    try {
      const response = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      );
      const data = await response.json();
      setPetList(data.pets);
      setLoading(false);
    } catch (err) {
      setError("Sorry, No pets are Found");
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    searchTypes();
  }, [animal, breed, location]);

  useEffect(() => {
    fetchPetsData();
  }, []);

  function handleImage(pet, imageIndex) {
    setSelectPets({ pet, imageIndex });
    navigate("/petdetails");
  }

  return (
    <petsListingContext.Provider
      value={{
        petList,
        selectpets,
        animal,
        breed,
        location,
        setLocation,
        setAnimal,
        setBreed,
        setPetList,
        fetchPetsData,
        handleImage,
        loading,
        error,
        setError,
        searchTypes,
      }}
    >
      {props.children}
    </petsListingContext.Provider>
  );
};

export default PetContext;
