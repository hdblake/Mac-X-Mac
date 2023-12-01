import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("Login successful:", response);
      alert("Successful login");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed");
    }
  };

  return (
    <form
      className="my-6 bg-main px-8 py-6 rounded-xl shadow-lg w-3/4 md:w-2/5 m-auto flex flex-col gap-y-6"
      onSubmit={handleLogin}
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-secondary rounded-lg h-12 focus:border focus:border-4 focus:border-accent outline-none font-bold p-2 shadow focus:shadow-lg font-mainText"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-secondary rounded-lg h-12 focus:border focus:border-4 focus:border-accent outline-none font-bold p-2 shadow focus:shadow-lg font-mainText"
      />
      <button
        className="block w-auto m-auto text-center bg-accent transition duration-300 ease-in hover:-translate-y-1 hover:scale-105 p-4 text-secondary font-bold text-lg rounded-xl w-1/3 border border-2 border-accent2 hover:bg-accent2 hover:text-secondary"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
