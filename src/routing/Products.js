import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { globel } from './Home'

 

function Products() {
  const {item,setitem} = useContext(globel)

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
console.log('add')
 setitem([...item, product])
// useglobel.setitem("hello aditya")



}
  return (
    
    <div>
      <h2>Products</h2>
      <div className='products'>
        {
          productData.map((product) => {
            return <div className='product'>
              <img src={product.thumbnail} alt=" " />
              <h4>{product.title}</h4>
              <a href="" onClick={(e)=>Myfunction(e,product)}>Add To Cart </a>
            </div>
          })
        }
      </div>
    </div>
   
  )
}

export default Products
