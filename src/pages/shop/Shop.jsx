import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Product from "../../components/Product";

export default function Shop() {
  // get products from shop context
  const { products } = useContext(ShopContext);

  const filteredProducts = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });

  const card = filteredProducts.map((product) => {
    return <Product product={product} key={product.id} />;
  });

  return (
    <>
      <h1>Shop</h1>
      <br />
      <section>{card}</section>
    </>
  );
}
