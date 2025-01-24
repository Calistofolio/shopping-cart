import { useState } from 'react'
import { data } from "../../products-json/products.json"
import './product.css'

function Product() {

  return (
    <div>
      {data.map((m) => 
      <div>
        <img src={m.image}/>
        <h4>{m.title}</h4>
        <p>{m.value}</p>
      </div>)}
    </div>
  )
}

export default Product
