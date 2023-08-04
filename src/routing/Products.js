import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { globel } from './Home'

 

function Products() {
  // const [btn,setbtn] = useState(false)
  const {item,setitem} = useContext(globel)
  const [btn,setbtn] = useState(false)
  const [productData, setProductData] = useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then((response) => {
      console.log(response.data.products)
      setProductData(response.data.products)
    })
  }, [])


function Myfunction(e ,product){
e.preventDefault()
// console.log('add')
 setitem([...item, product])
// useglobel.setitem("hello aditya")
e.target.style.display = 'none'
   
 setbtn(true)
   }


  return (
    
    <div>
      <h2>Products</h2>
      <div className='products'>
        {
          productData.map((product) => {
            return <div className='product'>
              <img src={product.thumbnail} alt="mkokjo " />
              <div className='detail'>
              <h4>{product.title}</h4>
              
              
              <button href=""  className='addBtn' onClick={(e)=>Myfunction(e,product)} >Add To Cart </button>           </div>
            </div>
          })
        }
      </div>
    </div>
   
  )
}

export default Products
