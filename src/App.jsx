import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Cart from './pages/cart'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path='cart' element={<Cart />}/>
    </Routes>
  )
}

export default App
