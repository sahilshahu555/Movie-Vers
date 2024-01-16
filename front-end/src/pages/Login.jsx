import React ,{useContext, useState}from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { MyContext } from '../components/AuthContextProvider';
const Login = () => {
    const navigate=useNavigate()
    const{authState,LoginUser}=useContext(MyContext)

    const [user,setUser]=useState({
        email:"",
        password:"",
    })
    const [flag,setFlag]=useState(false);
    const handleChange=(e)=>{
       setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       if(user.email=== ""){
        alert("Invalid Credentials")
        return;
    }
        
        fetch("http://localhost:8000/login",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        .then((res)=> res.json())
        .then((res)=>{console.log(res)
            localStorage.setItem("token",res.token)
            setFlag(true) 
            LoginUser("Success")
        })
        .catch((err)=>{setFlag(false) })
    }

    console.log(flag)

     if(flag){navigate("/")}
    // if(authState.isAuth){ return <Navigate to="/"/>}


  return (
       
     <div  
     style={{display:"flex",justifyContent:"center",
             alignItems:"center", width:"100%"
            }} 
            className='text-center mt-10  '
      >
        
      <form onSubmit={handleSubmit}
      className='text-center border w-80 flex justify-center items-center flex-col p-10 m-5 gap-3 bg-slate-300 rounded-2xl'
      >

       <h1 className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-14 m-2 rounded' >Login Form </h1>

       <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter Your Email' className='text-center p-1' />

       <input type="text" name="password" value={user.password} onChange={handleChange} placeholder='Enter Your Password' className='text-center p-1'/>
       
      

       <input type="submit" className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-5 m-2 rounded' />
      </form>
    </div>
  )
}

export default Login
