import React ,{useState,useEffect}from 'react'
import Card from '../components/Card'



const Home = () => {
    const [data, setData] = useState([]);
   

    const getTodos=()=>{
     fetch("http://localhost:8000/movies/",{
        headers:{
            "Content-Type": "application/json",
            "Auth":`Bearer ${localStorage.getItem('token')}`
        }
     })
     .then((res)=> res.json())
     .then((res)=>{console.log(res)
         setData(res.movies)
         
        }
     )
     .catch((err)=>{console.log(err)})
    }
useEffect(()=>{
    getTodos()
},[])

  return (
    <>
   
    <div className='grid  lg:grid-cols-4
    md:grid-cols-3
    grid-cols-2 gap-10 p-10'>
     {data?.map((elm,i)=><Card elm={elm} key={i}/>)}
    </div>
    </>
  )
}

export default Home
