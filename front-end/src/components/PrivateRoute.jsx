import React ,{useContext}from 'react'
import { MyContext } from './AuthContextProvider';
import {Navigate} from "react-router-dom"
const PrivateRoute = ({children}) => {

  const{authState}=useContext(MyContext);

    if(!authState.isAuth)
    { return <Navigate to="/login"/> }

  return children;
}

export default PrivateRoute
