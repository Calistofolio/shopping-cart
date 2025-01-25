import { data } from "../../products-json/products.json"
import { useContext } from "react"
import Button from "../button/button"
import { ProductContext } from "../../contexts/productsContext"
import './product.css'

function Product() {

  const { count } = useContext(ProductContext)

  return (
    <div>
      {data.map((m) => 
      <div>
        <img src={m.image}/>
        <h4>{count}</h4>
        <p>{m.value}</p>
        <Button/>
      </div>)}
    </div>
  )
}

export default Product
