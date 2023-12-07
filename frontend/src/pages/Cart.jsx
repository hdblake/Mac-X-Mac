import { useEffect } from "react";
import { Link } from "react-router-dom";

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
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-10">
        Cart
      </h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="font-mainText text-main text-md md:text-lg">
            Cart is empty!
          </p>
          <p className="font-mainText text-main text-md md:text-lg">
            Please add products to cart to checkout
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-y-6">
          {cart.map((product, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg border border-2 border-accent p-4"
            >
              <p className="font-mainText text-main text-md md:text-lg">
                Name: {product.name}
              </p>
              <p className="font-mainText text-main text-md md:text-lg">
                Price: ${product.price}
              </p>
              <p className="font-mainText text-main text-md md:text-lg">
                Color: {product.color}
              </p>
              <p className="font-mainText text-main text-md md:text-lg">
                Quantity: {product.quantity}
              </p>
              <div className="mt-4 flex justify-center">
                <button
                  className="font-mainText text-secondary bg-accent p-2 rounded-lg"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <Link to="/Checkout">
            <button className="font-mainText text-secondary bg-accent text-xl p-2 rounded-lg mt-4">
              Checkout
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}
