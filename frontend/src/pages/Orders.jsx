import { useState, useEffect } from "react";
import axios from "axios";

export default function Orders() {
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
        setError("Error fetching order history");
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
    return <div>Error: {error}</div>;
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
                <p>
                  <span className="font-mainText text-main text-lg">
                    Product:
                  </span>
                  <span className="font-mainText text-main text-lg">
                    {" "}
                    {item.name}
                  </span>
                </p>
                <p>
                  <span className="font-mainText text-main text-lg">
                    Quantity:
                  </span>
                  <span className="font-mainText text-main text-lg">
                    {" "}
                    {item.quantity}
                  </span>
                </p>
                <p>
                  <span className="font-mainText text-main text-lg">
                    Price:
                  </span>
                  <span className="font-mainText text-main text-lg">
                    {" "}
                    ${item.price}
                  </span>
                </p>
                <p>
                  <span className="font-mainText text-main text-lg">
                    Color:
                  </span>
                  <span className="font-mainText text-main text-lg">
                    {" "}
                    {item.color}
                  </span>
                </p>
              </div>
            ))}
            <p className="font-mainText text-main text-lg">
              Total: ${order.totalPrice}
            </p>
            <p className="font-mainText text-main text-lg">
              Ordered on: {order.date.substring(0, 10)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
