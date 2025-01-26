import { useContext } from 'react'
import { ProductContext } from '../contexts/productsContext'
import Header from '../components/header/header'


function Cart() {
  const { total } = useContext(ProductContext)

  return (
    <div>
        <Header></Header>
      funciona
    </div>
  )
}

export default Cart
