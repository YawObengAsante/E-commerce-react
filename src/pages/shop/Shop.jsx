import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Product from "../../components/Product";

export default function Shop() {
  // get products from shop context
  const { products } = useContext(ShopContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  const card = filteredProducts.map((item) => {
    return <Product item={item} key={item.id} />;
  });
  
  return (
    <>
    <h1>Shop</h1><br/>
    <section>{card}</section>;
    </>
  )
}
