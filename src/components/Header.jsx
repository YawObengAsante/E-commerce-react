import { NavLink, Link } from "react-router-dom";
import cartIcon from "../assets/icons/shopping-cart.svg";
import menuIcon from "../assets/icons/list.svg";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Header = () => {
  const { itemAmount } = useContext(CartContext);
  const { login, register, logout, isAuthenticated } = useKindeAuth();

  return (
    <div className="container">
      <header>
        <Link to="/">
          <h1>E-SHOP</h1>
        </Link>
        <nav>
          <NavLink to="/">Deals</NavLink>
          <NavLink to="whatsnew">What's new</NavLink>
          <NavLink to="cart">Delivery</NavLink>
        </nav>

        <div className="header-right">
          <div className="cart-icon-container">
            <Link to="cart">
              <img src={cartIcon} alt="shopping cart" />
            </Link>
            <div className="cart-counter">{itemAmount}</div>
          </div>
          {!isAuthenticated ? (
            <button onClick={register} type="button">
              Register
            </button>
          ) : (
            <button onClick={logout} type="button">
              Log Out
            </button>
          )}
          <img
            className="menu-icon"
            src={menuIcon}
            alt="menu icon"
            width={30}
            height={30}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
