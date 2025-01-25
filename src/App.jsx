import { useState } from 'react'
import Product from './components/product/product'
import { ProductContext } from './contexts/productsContext'
import './App.css'

function App() {
  const [count, setCount] = useState("melt")

  return (
    <div>
      <ProductContext.Provider value={{count, setCount}}>
      <Product/>
      </ProductContext.Provider>
    </div>
  )
}

export default App
