import React from 'react'
import Home from '../pages/Home'
import AddMovie from '../pages/AddMovie'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import {Routes,Route} from "react-router-dom"
import PrivateRoute from './PrivateRoute'
import SingleMovie from '../pages/SingleMovie'
const Allroutes = () => {
  
  return (
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/addmovie" element={<AddMovie/>} />
      <Route path="/singlemovie/:id" element={<SingleMovie/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default Allroutes
