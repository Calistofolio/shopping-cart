import { useContext } from 'react'
import { ProductContext } from '../../contexts/productsContext'
import "./cartProduct.css"
import Checkbox from '../checkbox/checkbox'


function CartProducts() {
  const { cartProducts } = useContext(ProductContext)
  return (
    <div>   
        {cartProducts.map((c)  => 
            <div>  
                <Checkbox pId = {c.title}> 
                    <span> {c.title} </span>
                    <span className='productValue'>R$ {c.value} </span> 
                </Checkbox>
        </div>)}
    </div>
  )
}

export default CartProducts
