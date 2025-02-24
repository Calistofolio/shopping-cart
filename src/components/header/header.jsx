import { useContext } from 'react'
import './header.css'
import { ProductContext } from '../../contexts/productsContext'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router'


function Header() {
    const { total } = useContext(ProductContext)

  return (
    <div >
        <div className='header'>
            <NavLink className="pageTitle" to="/"> LC Importados</NavLink>
            <NavLink className="cart" to="/cart">
            <div>
              <i class="fa fa-shopping-cart"/>
            </div>
            R${total}</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default Header
