import "./cartButtons.css"
import Button from '../../components/button/button'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/productsContext'


function CartButtons() {
  const { setCartProducts, setTotal } = useContext(ProductContext)
  return (
    <div class="cartButton">
        <Button onclick={() => { setTotal(0)
            setCartProducts({})
        }} buttonTitle="Cancelar" />
        <Button onclick={() => { setTotal(0)
            setCartProducts({})
        }} buttonTitle="Finalizar"/>
    </div>
  )
}

export default CartButtons
