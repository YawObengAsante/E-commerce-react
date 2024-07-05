import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Product from "../../components/Product";

const WhatsNew = () => {
  const { products } = useContext(ShopContext);

  const filteredProducts = products.filter((product) => {
    return (
      product.category === "jewelery" || product.category === "electronics"
    );
  });

  const cards = filteredProducts.map((product) => {
    return <Product product={product} key={product.id} />;
  });
  return (
    <>
      <h1>What's new</h1>
      <br />
      <section>{cards}</section>
    </>
  );
};

export default WhatsNew;
