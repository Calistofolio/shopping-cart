import { useState } from 'react'
import Product from '../components/product/product'
import { ProductContext } from '../contexts/productsContext'
import Cart from './cart'
import Header from '../components/header/header'

function Home() {
  const [total, setTotal] = useState(0)

  return (
    <div>
      <ProductContext.Provider value={{total, setTotal}}>
        <Header></Header>
        <Product/>
      </ProductContext.Provider>
    </div>
  )
}

export default Home
