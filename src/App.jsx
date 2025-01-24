import { useState } from 'react'
import Product from './components/product/product'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Product/>
    </div>
  )
}

export default App
