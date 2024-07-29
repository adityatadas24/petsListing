import React, { useContext } from 'react'
import { petsListingContext } from '../PetContext'
import "./style.css"
const PetDetails = () => {
    const {petList,selectpets ,setPetList } = useContext(petsListingContext)

const { pet, imageIndex } = selectpets;
  return (
    <div >
      <div className='details'>
      <h1>{pet.name}</h1>
      <img
        src={pet.images[imageIndex,0]}
        alt={`${pet.name} ${imageIndex}`}
        style={{ width: "300px", margin: "10px" }}
      />
      </div>
   
      <div className='details'>
      <p><span style={{fontSize:'20px',fontWeight:500}}>Breed: </span> {pet.breed}</p>
      <p><span style={{fontSize:'20px',fontWeight:500}}>Animal:</span> {pet.animal}</p>
      <p><span style={{fontSize:'20px',fontWeight:500}}>Description:</span> {pet.description}</p>
      <p><span style={{fontSize:'20px',fontWeight:500}}>Location:</span> {pet.city}, {pet.state}</p>
      </div>
     
    </div>
  )
}

export default PetDetails
