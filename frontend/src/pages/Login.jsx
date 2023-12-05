import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ setLoggedIn }) {
  useEffect(() => {
    document.title = "Mac X Mac | Login";
  });

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
      setLoggedIn(true);
      const token = response.data.token;
      const firstName = response.data.firstName;
      const userId = response.data.userId;
      localStorage.setItem("token", token);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("userId", userId);
      console.log(response);
      alert("Successful login");
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
