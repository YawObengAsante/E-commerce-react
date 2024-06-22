import CartItem from "../../components/CartItem";
import CheckoutSidebar from "../../components/CheckoutSidebar";
import Header from "../../components/Header";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Header />
      <main>
        <div className="cart-cards">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <CheckoutSidebar />
      </main>
    </>
  );
};

export default Cart;
