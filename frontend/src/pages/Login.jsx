import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Login({ setLoggedIn }) {
  useEffect(() => {
    document.title = "Mac X Mac | Login";
  });

  const location = useLocation();
  const message = location.state?.message || "";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3080/user/login", {
        email,
        password,
      });
      const { token, firstName, userId } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("userId", userId);
      setLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.error("Login failed: " + error);
      alert("Login failed: " + error);
    }
  };

  return (
    <section className="m-auto">
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-10">
        Login:
      </h1>
      {message && (
        <p className="mt-4 text-mainText text-accent text-center">{message}</p>
      )}
      <LoginForm
        handleLogin={handleLogin}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </section>
  );
}
