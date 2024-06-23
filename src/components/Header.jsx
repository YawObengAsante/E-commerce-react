import { NavLink, Link } from "react-router-dom";
import cartIcon from "../assets/icons/shopping-cart.svg";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Header = () => {
  const { itemAmount } = useContext(CartContext);
  console.log(itemAmount)

   // whats new section
   const toWhatsNew = () =>{
    window.addEventListener("click", ()=> {
     return window.scrollY = 100
    })
  }


  return (
    <header>
      <Link to="/">
        <h1>E-SHOP</h1>
      </Link>
      <nav>
        <NavLink to="/">Deals</NavLink>
        <NavLink to="whatsnew">What's New</NavLink>
        <NavLink to="cart">Delivery</NavLink>
      </nav>

      <div className="header-right">
        <div className="cart-icon-container">
          <Link to="cart">
            <img src={cartIcon} alt="shopping cart" />
          </Link>
          <div className="cart-counter">{itemAmount}</div>
        </div>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
