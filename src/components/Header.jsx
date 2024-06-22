import { NavLink,Link } from "react-router-dom";
import cartIcon from "../assets/icons/shopping-cart.svg";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const Header = () => {
  const cart = useContext(CartContext)
  
  // destructure amount from cart
  const {amount} = cart
    return (
        <header>
        <h1>E-SHOP</h1>
        <nav>
          <NavLink to="/">Deals</NavLink>
          <NavLink to="new">What's New</NavLink>
          <NavLink to="cart">Delivery</NavLink>
        </nav>

        <div className="header-right">
          <div className="cart-icon-container">
            <Link to="cart"><img src={cartIcon} alt="shopping cart" /></Link>
            <div className="cart-counter">{amount}</div>
          </div>
          <button>Sign Up</button>
        </div>
      </header>
    );
}
 
export default Header;