import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="absolute top-72 md:top-1/2 flex flex-row flex-wrap items-center justify-center md:flex-col md:left-0 md:items-start">
          <Link to="/Products">
            <li className="my-2 ml-4 text-main font-mainText font-bold text-xl lg:text-2xl hover:underline hover:decoration-4 hover:decoration-accent hover:underline-offset-4">
              Products
            </li>
          </Link>
          <Link to="/About">
            <li className="my-2 ml-4 text-main font-mainText font-bold text-xl lg:text-2xl hover:underline hover:decoration-4 hover:decoration-accent hover:underline-offset-4">
              About
            </li>
          </Link>
          <Link to="/Contact">
            <li className="my-2 ml-4 text-main font-mainText font-bold text-xl lg:text-2xl hover:underline hover:decoration-4 hover:decoration-accent hover:underline-offset-4">
              Contact
            </li>
          </Link>
          <Link to="/Cart">
            <li className="my-2 ml-4 text-main font-mainText font-bold text-xl lg:text-2xl hover:underline hover:decoration-4 hover:decoration-accent hover:underline-offset-4">
              Cart
            </li>
          </Link>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}
