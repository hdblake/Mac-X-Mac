import { useState, useEffect } from "react";
import axios from "axios";

export default function Orders({ userId }) {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = axios.get(
          "http://localhost:3080/user/history/${userId}",
        );
        setOrderHistory(response.data);
      } catch (err) {
        console.log("Error fetching order history", err);
      }
    };
    fetchOrderHistory();
  }, [userId]);
}

return (
  <section>
    <h2>Order History</h2>
    <ul>
      {orderHistory.map((order) => (
        <li key={order._id}>
          <p>Items: {order.items}</p>
          <p>Total: {order.totalPrice}</p>
          <p>Ordered on: {order.date}</p>
        </li>
      ))}
    </ul>
  </section>
);
