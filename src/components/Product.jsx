import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = ({ item }) => {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);
  // destructure item
  const { id, image, category, title, price } = item;

  const itemInCart = ()=>{
    const cartItem = cart.find(item => item.id === id)
    if (cartItem) {
      if (item.id === id) {
        const isInCart = cart.map(item => {
          return item.isInCart
        })
        return isInCart
      }
    }
  }




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
        <button className="add-button" onClick={() => addToCart(item, id)}>
          Add to Cart
        </button>
      )}

      {/* <button className="remove-button">Remove from Cart</button> */}
    </div>
  );
};

export default Product;
