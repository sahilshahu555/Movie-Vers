import React ,{useState}from 'react'

const Login = () => {
    const [user,setUser]=useState({
        email:"",
        password:"",
    })
    const handleChange=(e)=>{
       setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       
        
        fetch("http://localhost:8000/login",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        .then((res)=> res.json())
        .then((res)=>{console.log(res)
            localStorage.setItem("token",res.token)})
        .catch((err)=>{console.log(err)})
    }

    

  return (
       
     <div  
     style={{display:"flex",justifyContent:"center",
             alignItems:"center", width:"100%"
            }} 
            className='text-center '
      >
      <form onSubmit={handleSubmit}
      className='text-center'
       style={{display:"flex",justifyContent:"center",
       alignItems:"center",flexDirection:"column",
       width:"120%",margin:"20px",gap:"10px"
      }}
      >

   

       <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter Your Email' className='text-center p-1' />

       <input type="text" name="password" value={user.password} onChange={handleChange} placeholder='Enter Your Password' className='text-center p-1'/>
       
      

       <input type="submit" className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-5 m-2 rounded' />
      </form>
    </div>
  )
}

export default Login
