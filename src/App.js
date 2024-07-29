import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import PetDetails from './components/PetDetails/PetDetails'
import PetContext from './components/PetContext'

const App = () => {
  return (
    <PetContext>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/petdetails' element={<PetDetails/>}/>
      </Routes>
    </PetContext>
  )
}

export default App
