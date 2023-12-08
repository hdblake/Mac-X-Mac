import { useState, useEffect } from "react";
import axios from "axios";

export default function Orders() {
  useEffect(() => {
    document.title = "Mac X Mac | Orders";
  });

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          "http://localhost:3080/orders/history",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              UserId: `${userId}`,
            },
          },
        );
        console.log(response.data);
        if (response && response.data && response.data.length > 0) {
          console.log("Orders: ", response.data);
          setOrders(response.data);
        } else {
          setError("No order history found or empty array received");
        }
      } catch (error) {
        console.log("Error fetching order history: ", error.response || error);
        setError("No order history");
      } finally {
        setLoading(false);
      }
    };
    fetchOrderHistory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1 className="font-header text-main text-7xl md:text-8xl md:px-2 text-center mt-10">
          Order History
        </h1>
        <p className="text-center text-accent font-mainText mt-4">
          Error: {error}
        </p>
        <p className="text-center text-accent font-mainText mt-4">
          Try placing an order to view order history!
        </p>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center">
      <h1 className="font-header text-main text-7xl md:text-8xl md:px-2 text-center mt-10">
        Order History
      </h1>
      <ul>
        {orders.map((order) => (
          <li
            key={order._id}
            className="border border-2 border-accent rounded-xl shadow-lg p-6 my-6"
          >
            <p className="font-mainText text-accent text-xl text-center mb-4">
              Item(s):
            </p>
            {order.items.map((item, i) => (
              <div key={i}>
                {Object.keys(item).length <= 4 && (
                  <div className="border-t-4 border-accent">
                    <p className="font-mainText text-main text-md md:text-lg mt-2">
                      Name: {item.name}
                    </p>
                    <p className="font-mainText text-main text-md md:text-lg">
                      Price: {item.price}
                    </p>
                    <p className="font-mainText text-main text-md md:text-lg">
                      Color: {item.color}
                    </p>
                    <p className="font-mainText text-main text-md md:text-lg mb-2">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                )}
                {Object.keys(item).length >= 5 && (
                  <div className="border-t-4 border-accent">
                    <p className="font-mainText text-main text-md md:text-lg mt-2">
                      Name: {item.name}
                    </p>
                    <p className="font-mainText text-main text-md md:text-lg">
                      Size: {item.size}
                    </p>
                    <p className="font-mainText text-main text-md md:text-lg">
                      Price: {item.price}
                    </p>
                    <p className="font-mainText text-main text-md md:text-lg">
                      Color: {item.color}
                    </p>
                    <p className="font-mainText text-main text-md md:text-lg">
                      Type: {item.type}
                    </p>
                    <p className="font-mainText text-main text-md md:text-lg mb-2">
                      Text: {item.text}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div className="border-t-4 border-accent">
              <p className="font-mainText text-main text-lg mt-2">
                Total: ${order.totalPrice}
              </p>
            </div>
            <p className="font-mainText text-main text-lg">
              Ordered on: {order.date.substring(0, 10)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
