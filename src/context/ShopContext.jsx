import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // Product state
  const [products, setProducts] = useState([]);

  // fetch products from Fakestore API
  useEffect(() => {
    const abortCont = new AbortController();
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products", {
        signal: abortCont.signal,
      });

      if (!res.ok) {
        throw Error("Could not fecth products");
      }
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();

    () => {
      abortCont.abort();
    };
  }, []);



  return (
    <ShopContext.Provider value={{ products }}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
