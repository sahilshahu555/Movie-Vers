import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        age:"",
        phone_number:""
    })
    const [flag,setFlag]=useState(false);

    const handleChange=(e)=>{
       setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newUser={
            name:user.name,
            email:user.email,
            password:user.password,
            age:Number(user.age),
            phone_number:Number(user.phone_number)
        }

        if(user.email=== "" || user.name=== "" ){
            alert("Invalid Credentials")
            return;
        }
        
        fetch("https://moviesbackend-sezi.onrender.com/signup",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
        .then((res)=> res.json())
        .then((res)=>{console.log(res)
              setFlag(true) 
            }
        )
        .catch((err)=>{setFlag(false)})
    }

    console.log(flag)
    if(flag){navigate("/login")}
  return (
       
     <div  
     style={{display:"flex",justifyContent:"center",
             alignItems:"center", width:"100%"
            }} 
            className='text-center'
      >
      <form onSubmit={handleSubmit}
      className='text-center border w-80 flex justify-center items-center flex-col p-5 m-10 gap-2 bg-slate-300 rounded-2xl shadow-lg shadow-violet-400/100 ...'
      >
        <h1 className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-14 m-2 rounded' >SignUp Form </h1>
       <input type="text" name="name" value={user.name} onChange={handleChange} placeholder='Enter Your Name' className='text-center p-1'/>

       <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter Your Email' className='text-center p-1'/>

       <input type="text" name="password" value={user.password} onChange={handleChange} placeholder='Enter Your Password' className='text-center p-1'/>
       
       <input type="number" name="age" value={user.age} onChange={handleChange} placeholder='Enter Your Age' className='text-center p-1'/>

       <input type="number" name="phone_number" value={user.phone_number} onChange={handleChange} placeholder='Enter Your Phone number' className='text-center p-1'/>

       <input type="submit" className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-5 m-2 rounded-xl cursor-pointer ... hover:text-black' />
       
      </form>
    </div>
  )
}

export default Signup
