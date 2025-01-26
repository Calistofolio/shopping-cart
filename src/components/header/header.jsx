import { useContext } from 'react'
import './header.css'
import { ProductContext } from '../../contexts/productsContext'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router'


function Header() {
    const { total } = useContext(ProductContext)

  return (
    <div>
        <div className='header'>
            <NavLink to="/">oii</NavLink>
            <NavLink to="/cart">R$ {total}</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default Header
