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
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import ProtectedRoute from "./ProtectedRoute";

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
    localStorage.removeItem("userId");
    setLoggedIn(false);
    navigate("/");
  };

  // Cart functionality
  const [savedCart] = useState(localStorage.getItem("cart"));
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const { id, color, quantity } = product;

    const existingProductIndex = cart.findIndex(
      (item) => item.id === id && item.color === color,
    );

    if (existingProductIndex !== -1) {
      const updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
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
          <Route
            path="/Products/Signs"
            element={<Signs addToCart={addToCart} />}
          ></Route>
          <Route
            path="/Cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          ></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route
            path="/Login"
            element={<Login setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route
            path="/Account"
            element={<ProtectedRoute element={Account} />}
          ></Route>
          <Route
            path="/Checkout"
            element={
              <ProtectedRoute
                element={Checkout}
                cart={cart}
                setCart={setCart}
              />
            }
          ></Route>
          <Route
            path="/Account/Orders"
            element={<ProtectedRoute element={Orders} />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
