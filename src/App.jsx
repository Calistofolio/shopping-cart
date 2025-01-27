import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Cart from './pages/cart/cart'
import Header from './components/header/header'
import { useState } from 'react'
import { ProductContext } from './contexts/productsContext'


function App() {
  const [total, setTotal] = useState(0)
  const [cartProducts, setCartProducts] = useState([])
  return (
    <ProductContext.Provider value={{total, setTotal, cartProducts, setCartProducts}}>
      <Routes>
        <Route element={<Header/>}>
          <Route index element={<Home />}/>
          <Route path='cart' element={<Cart />}/>
        </Route>
      </Routes>
    </ProductContext.Provider>
  )
}

export default App
