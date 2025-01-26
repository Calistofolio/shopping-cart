import { data } from "../../products-json/products.json"
import { useContext } from "react"
import Button from "../button/button"
import { ProductContext } from "../../contexts/productsContext"
import './product.css'

function Product() {

  const { total, setTotal } = useContext(ProductContext)

  return (
    <div>
      {data.map((m) => 
      <div >
        <img className="prod" src={m.image}/>
        <h4>{m.title}</h4>
        <p>R$ {m.value}</p>
        <Button onclick = {() => setTotal(total + m.value)}/>
      </div>)}
    </div>
  )
}

export default Product
