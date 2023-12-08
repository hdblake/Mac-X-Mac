import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function ProtectedRoute({ element: Element, ...rest }) {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3080/user/auth", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data.message);
      } catch (error) {
        console.log(error.message);
      }
    };
    verifyToken();
  }, []);

  useEffect(() => {
    const isAuthorized = !!localStorage.getItem("token");
    if (!isAuthorized) {
      navigate("/Login", {
        state: {
          message:
            "Not authorized to view this page. Please login to view page",
        },
      });
    }
  }, []);

  return <Element {...rest} />;
}
