import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg'
import { ShoppingPage } from './02-component-patterns/pages/ShoppingPage';



export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav >
          <img src={logo} alt="react-logo" />
          <ul>
            <li>
              <NavLink to='/' className={ ({isActive}) => isActive ? 'nav-active' : '' }>Shopping</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={ ({isActive}) => isActive ? 'nav-active' : '' }>About</NavLink>
            </li>
            <li>
              <NavLink to='/users' className={ ({isActive}) => isActive ? 'nav-active' : '' }>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/users" element={<h1>UsersPage</h1>} />
          <Route path="/about" element={<h1>AboutPage</h1>} />
          <Route path="/" element={<ShoppingPage />} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
