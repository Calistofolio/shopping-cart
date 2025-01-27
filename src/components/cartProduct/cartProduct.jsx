import { useContext } from 'react'
import { ProductContext } from '../../contexts/productsContext'
import "./cartProduct.css"
import Checkbox from '../checkbox/checkbox'


function CartProducts() {
  const { cartProducts } = useContext(ProductContext)
  return (
    <div>   
      <li>
        {cartProducts.map((c)  => 
        <ul key={c.value} id={c.value}>
            <div >  
                <Checkbox price = {c.value}> 
                    <span> {c.title} </span>
                    <span className='productValue'>R$ {c.value} </span> 
                </Checkbox>
            </div>
          </ul>)}
        </li>
    </div>
  )
}

export default CartProducts
