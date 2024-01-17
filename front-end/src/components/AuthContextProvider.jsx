import { createContext, useState } from "react";



export const MyContext= createContext();

export const AuthContextProvider=({children})=>{

  const [data, setData] = useState([]);

  const [authState,setAuthState]=useState
  ({ isAuth:false, token: null, })

  const LoginUser=(token)=>{
    setAuthState({ isAuth:true, token: token}) 
  }

  const LoginOut=()=>{
    setAuthState({ isAuth:false, token: null})
  }

  return <MyContext.Provider value={{data, setData,authState,LoginUser,LoginOut}}>{children}</MyContext.Provider>
};