import CartProducts from '../../components/cartProduct/cartProduct'
import "./cart.css"
import CartButtons from '../../components/cartButtons/cartButtons'
import { useContext } from "react"
import { ProductContext } from "../../contexts/productsContext"



function Cart() {
  const { total, setTotal } = useContext(ProductContext)
  function handleClick(){
    const selected  = document.getElementsByClassName("check");
    let newTotal = 0;
    for (let i = 0; i < selected.length; i++) {
        if ((selected)[i].checked == true) {
            newTotal += parseInt(selected[i].value);
        }
    }
    setTotal(total - newTotal)
  }
  return (
    <div className='cartContainer'>
      <form id='1' onSubmit={(e) => e.preventDefault()}>
        <CartProducts/>
        <CartButtons onclick={() => handleClick()}/>
      </form>
    </div>
  )
}

export default Cart
