import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Products() {
  const [productData, setProductData] = useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then((response) => {
      console.log(response.data.products)
      setProductData(response.data.products)
    })
  }, [])

  return (
    <div>
      <h2>Products</h2>
      <div className='products'>
        {
          productData.map((product) => {
            return <div className='product'>
              <img src={product.thumbnail} alt=" " />
              <h4>{product.title}</h4>
              <a href="">Add To Cart</a>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Products
