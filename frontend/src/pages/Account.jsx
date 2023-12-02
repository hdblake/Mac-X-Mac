import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Account({ setLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3080/user/account", {
          headers: { Authorization: token },
        });
        console.log(response.data);
      } catch (err) {
        console.log("Failed to get token: " + err.response.data.message);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    } else {
      navigate("/Login");
    }
  }, []);

  return (
    <section>
      <h1>Account</h1>
      <p>Welcome!</p>
    </section>
  );
}
