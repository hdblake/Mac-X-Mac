import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Macrame from "../pages/Macrame";
import Signs from "../pages/Signs";

export default function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="mb-auto">
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Products/Macrame" element={<Macrame />}></Route>
          <Route path="/Products/Signs" element={<Signs />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
