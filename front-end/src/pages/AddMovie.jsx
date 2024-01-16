import React ,{useState}from 'react'

const AddMovie = () => {
    const [user,setUser]=useState({
        Title:"",
        Poster:"",
        Year:"",
 
    })
    const handleChange=(e)=>{
       setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newMovie={
          Title:user.Title,
          Poster:user.Poster,
          Year:user.Year,
            
        }
        
        fetch("http://localhost:8000/movies/create",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMovie)
        })
        .then((res)=> res.json())
        .then((res)=>console.log(res))
        .catch((err)=>{console.log(err)})
    }

    

  return (
       
     <div  
     style={{display:"flex",justifyContent:"center",
             alignItems:"center", width:"100%"
            }} 
            className='text-center'
      >
      <form onSubmit={handleSubmit}
      className='text-center'
       style={{display:"flex",justifyContent:"center",
       alignItems:"center",flexDirection:"column",
       width:"120%",margin:"20px",gap:"10px"
      }}
      >

       <input type="text" name="Title" value={user.Title} onChange={handleChange} placeholder='Enter Movie Title' className='text-center p-1'/>

       <input type="text" name="Poster" value={user.Poster} onChange={handleChange} placeholder='Enter Movie Image' className='text-center p-1'/>

       <input type="text" name="Year" value={user.Year} onChange={handleChange} placeholder='Enter Movie Year' className='text-center p-1'/>
       


       <input type="submit" className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-5 m-2 rounded' />
       
      </form>
    </div>
  )
}

export default AddMovie;

