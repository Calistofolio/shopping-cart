import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Cart from './pages/cart'
import Header from './components/header/header'
import { useState } from 'react'

import { ProductContext } from './contexts/productsContext'
import './App.css'

function App() {
  const [total, setTotal] = useState(0)
  return (
    <ProductContext.Provider value={{total, setTotal}}>
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
