import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, setCart }) {
  useEffect(() => {
    document.title = "Mac X Mac | Checkout";
  });

  const [customerInfo, setCustomerInfo] = useState({});
  const [paymentMessage, setPaymentMessage] = useState("");
  const navigate = useNavigate();

  const handleCustomerInfo = (event) => {
    const { name, value } = event.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

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

  const handleOrderAndPayment = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3080/orders/checkout",
        {
          userId: userId,
          items: cart,
          totalPrice,
          date: new Date(),
          customerInfo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const clientSecret = response.data.clientSecret;
      console.log(clientSecret);

      const paymentResponse = await axios.post(
        "http://localhost:3080/orders/process-payment",
        {
          paymentMethod: "pm_card_visa",
          clientSecret: clientSecret.id,
          returnURL: "http://localhost:5173",
        },
      );

      console.log(`Payment response: ${paymentResponse.data}`);

      if (paymentResponse) {
        setPaymentMessage("Payment successful");
        console.log("Order placed:", response.data);
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/", { state: { message: "Order successfully placed!" } });
      } else {
        setPaymentMessage("Payment failed");
      }
    } catch (error) {
      setPaymentMessage("Payment failed: unknown reason");
    }
  };

  const handleSubmit = () => {
    handleOrderAndPayment();
  };

  return (
    <section className="flex flex-col items-center">
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-10">
        Checkout
      </h1>
      <div>
        {cart.length === 0 ? (
          <>
            <p className="font-mainText text-main text-md md:text-lg text-center">
              Cart is empty, there is nothing to checkout.
            </p>
            <p className="font-mainText text-main text-md md:text-lg text-center">
              Please add items to the cart in order to checkout!
            </p>
          </>
        ) : (
          <>
            <div>
              <h2 className="font-mainText text-main text-2xl">
                Order Summary:
              </h2>
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
            <div className="flex flex-col justify-center ">
              <label
                htmlFor="firstName"
                className="font-mainText text-accent text-lg mr-2 mt-4"
              >
                First Name:{" "}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border border-2 border-main focus:border focus:border-2 focus:border-accent outline-none rounded-lg text-accent font-mainText p-1"
                value={customerInfo.firstName || ""}
                onChange={handleCustomerInfo}
                required
              />
              <label
                htmlFor="lastName"
                className="font-mainText text-accent text-lg mr-2 mt-4"
              >
                Last Name:{" "}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border border-2 border-main focus:border focus:border-2 focus:border-accent outline-none rounded-lg text-accent font-mainText p-1"
                value={customerInfo.lastName || ""}
                onChange={handleCustomerInfo}
                required
              />
              <label
                htmlFor="address"
                className="font-mainText text-accent text-lg mr-2 mt-4"
              >
                Address:{" "}
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="border border-2 border-main focus:border focus:border-2 focus:border-accent outline-none rounded-lg text-accent font-mainText p-1"
                value={customerInfo.address || ""}
                onChange={handleCustomerInfo}
                required
              />
              <label
                htmlFor="cityState"
                className="font-mainText text-accent text-lg mr-2 mt-4"
              >
                City, State:{" "}
              </label>
              <input
                type="text"
                id="cityState"
                name="cityState"
                className="border border-2 border-main focus:border focus:border-2 focus:border-accent outline-none rounded-lg text-accent font-mainText p-1"
                value={customerInfo.cityState || ""}
                onChange={handleCustomerInfo}
                required
              />
              <label
                htmlFor="zipcode"
                className="font-mainText text-accent text-lg mr-2 mt-4"
              >
                Zipcode:{" "}
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                className="border border-2 border-main focus:border focus:border-2 focus:border-accent outline-none rounded-lg text-accent font-mainText p-1"
                value={customerInfo.zipcode || ""}
                onChange={handleCustomerInfo}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="font-mainText text-secondary bg-accent p-2 rounded-lg mt-4"
                onClick={handleSubmit}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
