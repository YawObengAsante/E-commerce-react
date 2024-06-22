import { createContext, useState } from "react";

// Create context
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // cart states
  const [cart, setCart] = useState([]);

  // add item to cart
  const addToCart = (item, id) => {
    const newItem = { ...item, amount: 1, isInCart: true };

    //  if item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove item from cart
  const removeFromCart = (id) => {
      const filteredItem = cart.filter((item) => {
        return item.id !== id;
      });
      setCart(filteredItem);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      if (cartItem.amount < 2) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, isInCart: false };
          }
        });
        setCart(newCart);
        removeFromCart(id);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
