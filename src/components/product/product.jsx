import { data } from "../../products-json/products.json"
import { useContext } from "react"
import Button from "../button/button"
import { ProductContext } from "../../contexts/productsContext"
import './product.css'

function Product() {

  const { total, setTotal, cartProducts, setCartProducts } = useContext(ProductContext)

  return (
    <div className="productContainer">
      <li className="productTemplate">
        {data.map((m) => 
          <ul className="productCard">
            <img className="prodImage" src={m.image}/>
            <h4>{m.title}</h4>
            <p>R${m.value}</p>
            <Button buttonTitle="Adicionar ao carrinho" onclick = {() => {setTotal(total + m.value)
            setCartProducts([...cartProducts, {title: m.title, value: m.value}])
          }}/>
        </ul>)}
      </li>
    </div>
  )
}

export default Product
