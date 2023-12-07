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
        const response = await axios.get(
          "http://localhost:3080/orders/history",
          {
            headers: {
              Authorization: `Bearer ${token}`,
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
    <section>
      <h2>Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <p>Items:</p>
            {order.items.map((item, i) => (
              <div key={i}>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <p>{item.price}</p>
                <p>{item.color}</p>
              </div>
            ))}
            <p>Total: {order.totalPrice}</p>
            <p>Ordered on: {order.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
