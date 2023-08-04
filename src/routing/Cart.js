import React, { useContext } from 'react'
import { globel } from './Home'
function Cart() {
  const {item,setitem} = useContext(globel)
  // console.log(item)

  function Deletefunc(e, result){
    e.preventDefault()
    console.log(e)
     let temp = item.filter((ite) => ite.id !==  result.id  )
    return setitem(temp)
  }
  return (
    <>
    {
       item.map((result)=>{
        // console.log("cart")
       return( <div className='cartData'> 
      <img src={result.thumbnail} alt=" " />
      <h4>{result.title}</h4>
      <a href='' className='delete' onClick={(e) => {Deletefunc(e, result)} }>delete</a>
        </div>)
       })
    }
</>
  )
}

export default Cart
