import { useContext } from 'react'
import { ProductContext } from '../contexts/productsContext'
import Header from '../components/header/header'


function Cart() {
  const { total } = useContext(ProductContext)

  return (
    <div>
      funciona
    </div>
  )
}

export default Cart
