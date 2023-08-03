import React from 'react'
import axios from "axios"
import {useState,useEffect} from "react"
import { Link } from 'react-router-dom'

function Blog() {
      const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((Response)=>{
            console.log(Response)
            setdata(Response.data)
        })
    },[])

    return (
    <>
     <div className='results'>
        <h1>Blogs</h1>
          {
          data.map((result)=>
          {
              return   <div className='posts'>
                    <h3><Link to={`/blog/${result.id}`}>{result.title}</Link></h3>
                    <p>{result.body}</p>
                 </div>
           })
        }
     </div>
    </>
  )
}

export default Blog
