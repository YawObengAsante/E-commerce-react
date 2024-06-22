import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  // destructure item
  const { image, price, amount, id } = item;

  return (
    <article className="cart-card">
      <div className="img-and-itemName">
        <img src={image} />
        <p>{item.title}</p>
      </div>

      <div className="item-quantity">
        <div onClick={() => decreaseAmount(id)} className="decrease">
          -
        </div>
        <div className="item-number">{amount}</div>
        <div onClick={() => increaseAmount(id)} className="increase">
          +
        </div>
      </div>

      <div className="price">
        <p>Price</p>${price}
      </div>

      <div className="total">
        <p>Total</p>${price * amount}
      </div>

      <div onClick={() => removeFromCart(id)} className="removeFromCartBtn">
        &times;
      </div>
    </article>
  );
};

export default CartItem;
