import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");
  const products = [
    {
      id: 1,
      name: "Dyson Zone Absolute+ Air Purification",
      price: 799.99,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49.99,
      image: "/assets/images/1002.png",
    },
  ];

  return (
    <main>
      <section className="cart">
        <h1>Cart Products: {products.length}</h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
