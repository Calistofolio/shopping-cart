import "./cartButtons.css"
import Button from '../../components/button/button'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/productsContext'


function CartButtons(props) {
  const { setCartProducts, setTotal, total } = useContext(ProductContext)
  return (
    <div className="cartButton">
        <Button onclick={() => { setTotal(0)
            setCartProducts([])
        }} buttonTitle="Cancelar" />
        <Button onclick={props.onclick} typeB="submit" buttonTitle="Finalizar"/>
    </div>
  )
}

export default CartButtons
