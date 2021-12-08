import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({click}) => {
  return (
    <nav className="navbar">
      {/** Logo */}
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>

      {/**Links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo_badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <ul className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </ul>
    </nav>
  )
}

export default Navbar;