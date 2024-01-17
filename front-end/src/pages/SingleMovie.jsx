import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const SingleMovie = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [data1, setData1] = useState([]);
  const [load, setLoad] = useState(false);
  const [flag,setFlag]=useState(false);
 
 

  const getMovie=()=>{
    
    setLoad(true);
   
   fetch(`https://moviesbackend-sezi.onrender.com/movies/`,{
    method:"GET",
      headers:{
          "Content-Type": "application/json",
          "Auth":`Bearer ${localStorage.getItem('token')}`
      }
   }).then((res)=> res.json())
     .then((res)=>{
       setData1(res.movies)
       setLoad(false)
      }
   )
   .catch((err)=>{
    console.log(err)
    setLoad(false)
  })
  }



useEffect(()=>{
  getMovie()
},[])
let newMovie=data1?.filter((elm)=>elm.id===+id)
console.log(newMovie)
let newData=newMovie[0]


const deleteMovie=(e,id)=>{
  let newMovie1=data1?.filter((elm)=>elm.id!==+id)
 
}

console.log(flag)

if(flag){navigate("/")}
  return (
    <div className='text-white'>
      {load?(
<div role="status" className='flex justify-around items-center mt-10 flex-col'>
    <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <h2 className="text-white text-center">Loading...</h2>
</div>
):( <div className='flex sm:flex-col lg:flex-row flex-wrap justify-around items-center gap-8 p-5  border rounded-xl  
 mx-20 my-6 shadow-lg shadow-violet-400/100 ... bg-slate-300 text-black
'>
      <div> <img src={newMovie[0]?.Poster} alt="" className='w-72 rounded-xl shadow-lg shadow-violet-400/100 ...' /></div>
      <div className='flex flex-col justify-around items-center gap-3 bg-black text-white p-2 rounded-xl shadow-lg shadow-violet-400/100 ...'  > 
      <h1 className='text-white  m-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-20 mt-2  rounded'>{newMovie[0]?.Title}</h1>
      <div className='flex flex-col justify-around items-start gap-10 bg-black text-white p-2 rounded-xl'>
     <p>Actors : {newMovie[0]?.Actors}</p>
     <p>Genre : {newMovie[0]?.Genre} </p>
     <p>Language : {newMovie[0]?.Language} </p>
     <p>Director : {newMovie[0]?.Director}</p>
     <p>Awards : {newMovie[0]?.Awards}</p>
     </div>
     <div className='flex justify-around items-center m-auto w-46'>
     <button className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-5 m-2 rounded-xl cursor-pointer ... hover:text-black'
     onClick={(e)=>{deleteMovie(e,newMovie[0]?.id)}}
     >Delete</button>
     <button className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-8 m-2 rounded-xl cursor-pointer ... hover:text-black'>Edit</button>
     </div>
      </div>

    
    
     
     
    </div>)}
    </div>
  )
}

export default SingleMovie
