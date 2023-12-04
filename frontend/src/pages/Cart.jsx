import { useEffect } from "react";

export default function Cart({ cart, removeFromCart }) {
  useEffect(() => {
    document.title = "Mac X Mac | Cart";
  });

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  console.log(cart);

  return (
    <section>
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-10 underline decoration-2 decoration-accent">
        Cart
      </h1>
      <div className="flex flex-col items-center gap-y-6">
        {cart.map((product, index) => (
          <div key={index}>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Color: {product.color}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
}
