import { useContext } from 'react'
import './header.css'
import { ProductContext } from '../../contexts/productsContext'
import { NavLink } from 'react-router'


function Header() {
    const { total } = useContext(ProductContext)

  return (
    <div className='header'>
      <NavLink to="/">oii</NavLink>
      <NavLink to="/cart">R$ {total}</NavLink>
    </div>
  )
}

export default Header
