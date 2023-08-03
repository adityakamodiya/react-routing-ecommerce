import axios from 'axios'
import React from 'react'
import {useState,useEffect} from "react"
function Top10() {
    let [data ,setData] =useState([])  
useEffect(()=>
    axios.get(`https://api.coinlore.net/api/tickers/`)
    .then((Response)=>{
        console.log(Response.data.data)
        setData(Response.data.data)
    })
    ,[])
  return (
    <>
   <div id='wrapper'>
    {data.filter(res=>res.rank<=10).map((result)=>
   
   <div className='box'>

    </div>
    )}
   </div>
    </>
  )
}

export default Top10
