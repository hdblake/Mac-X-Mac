import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Macrame from "../pages/Macrame";
import Signs from "../pages/Signs";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useState, useEffect } from "react";
import Account from "../pages/Account";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    setLoggedIn(false);
    navigate("/");
  };

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header loggedIn={loggedIn} logout={logout} />
      <main className="mb-auto">
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route
            path="/Products/Macrame"
            element={<Macrame addToCart={addToCart} />}
          ></Route>
          <Route path="/Products/Signs" element={<Signs />}></Route>
          <Route path="/Cart" element={<Cart cart={cart} />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route
            path="/Login"
            element={<Login setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route
            path="/Account"
            element={<Account setLoggedIn={setLoggedIn} />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
