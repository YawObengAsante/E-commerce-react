import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = ({ product }) => {
  // destructure item
  const { id, image, category, title, price } = product;

  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  const itemInCart = () => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const isInCart = cart.map((item) => {
        if (item.id === id) {
          return item.isInCart;
        }
      });
      return isInCart;
    }
  };

  return (
    <div className="item-card" key={id}>
      <div className="item-card-image-container">
        <img src={image} alt="item image" />
      </div>
      <div className="item-card-title-price">
        <p className="item-title">{title}</p>
        <p className="item-price">${price}</p>
      </div>
      <div className="item-descripton-container">
        <p className="item-description">{category}</p>
      </div>
      {itemInCart() ? (
        <button className="remove-button" onClick={() => removeFromCart(id)}>
          Remove from Cart
        </button>
      ) : (
        <button className="add-button" onClick={() => addToCart(product, id)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
