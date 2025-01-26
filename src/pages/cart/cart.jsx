import CartProducts from '../../components/cartProduct/cartProduct'
import "./cart.css"
import CartButtons from '../../components/cartButtons/cartButtons'


function Cart() {
  return (
    <div className='cartContainer'>
        <CartProducts/>
        <CartButtons/>
    </div>
  )
}

export default Cart
