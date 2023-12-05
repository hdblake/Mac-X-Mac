import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, setCart }) {
  useEffect(() => {
    document.title = "Mac X Mac | Checkout";
  });

  const navigate = useNavigate();

  const shipping = 10 + (cart.length - 1) * 2;
  const total = cart
    .reduce((sum, product) => sum + product.price * product.quantity, 0)
    .toFixed(2);
  const tax = (total * 0.06).toFixed(2);
  const totalPrice = (
    parseFloat(total) +
    parseFloat(shipping) +
    parseFloat(tax)
  ).toFixed(2);

  const handleCheckout = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        "http://localhost:3080/orders/checkout",
        {
          userId: userId,
          items: cart,
          totalPrice,
          date: new Date(),
        },
      );
      console.log("Order placed:", response.data.order);
      localStorage.removeItem("cart");
      setCart([]);
      alert("Order submitted!");
      navigate("/");
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  return (
    <section className="flex flex-col items-center">
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-10 underline decoration-2 decoration-accent">
        Checkout
      </h1>
      <div>
        <h2 className="font-mainText text-main text-2xl">Order Summary:</h2>
        <p className="font-mainText text-main text-md md:text-lg text-center">
          Cart Total: ${total}
        </p>
        <p className="font-mainText text-main text-md md:text-lg text-center">
          Shipping: ${shipping}
        </p>
        <p className="font-mainText text-main text-md md:text-lg text-center">
          Tax: ${tax}
        </p>
        <p className="font-mainText text-main text-md md:text-lg text-center">
          Order Total: ${totalPrice}
        </p>
      </div>
      <button
        className="font-mainText text-secondary bg-accent p-2 rounded-lg mt-4"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </section>
  );
}
