import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Product from "../../components/Product";

const WhatsNew = () => {
  const { products } = useContext(ShopContext);

  const filteredProducts = products.filter((item) => {
    return item.category === "jewelery" || item.category === "electronics";
  });

  const cards = filteredProducts.map((item) => {
    return <Product item={item} key={item.id} />;
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
