import CartItem from "../../components/CartItem";
import CheckoutSidebar from "../../components/CheckoutSidebar";
import Header from "../../components/Header";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import emptyCart from "../../assets/images/empty-cart.png";
import Footer from "../../components/Footer";

const Cart = () => {
  const { cart, itemAmount } = useContext(CartContext);

  const cartEmpty = (
    <div className="empty-cart-container">
      <img src={emptyCart} alt="empty cart" />
    </div>
  );

  const cartNotEmpty = (
    <div className="cart-cards">
      {cart.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
    </div>
  );
  return (
    <>
      <Header />
      <main>
        {itemAmount === 0 ? cartEmpty : cartNotEmpty}
        <CheckoutSidebar />
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default Cart;
