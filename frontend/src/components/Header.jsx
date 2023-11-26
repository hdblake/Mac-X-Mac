import { Link } from "react-router-dom";
import mainLogo from "../images/macxmac.png";

export default function Header() {
  return (
    <header>
      <div className="flex justify-center align-center items-center p-3">
        <Link to="/">
          <img src={mainLogo} alt="logo" width={200} height={200} />
        </Link>
      </div>
      <div className="bg-main p-2 text-center">
        <span className="font-mainText font-bold text-secondary text-xl">
          Login
        </span>
        <span className="font-mainText font-bold text-accent text-xl"> | </span>
        <span className="font-mainText font-bold text-secondary text-xl">
          Signup
        </span>
      </div>
      <div className="bg-main">
        <nav>
          <ul className="fixed left-0 top-1/2">
            <Link to="/Products">
              <li className="my-2 ml-4 text-main font-mainText font-bold text-2xl hover:underline hover:decoration-4 hover:decoration-accent hover:underline-offset-4">
                Products
              </li>
            </Link>
            <Link to="/About">
              <li className="my-2 ml-4 text-main font-mainText font-bold text-2xl hover:underline hover:decoration-4 hover:decoration-accent hover:underline-offset-4">
                About
              </li>
            </Link>
            <Link to="/Contact">
              <li className="my-2 ml-4 text-main font-mainText font-bold text-2xl hover:underline hover:decoration-4 hover:decoration-accent hover:underline-offset-4">
                Contact
              </li>
            </Link>
            <Link to="/Cart">
              <li className="my-2 ml-4 text-main font-mainText font-bold text-2xl hover:underline hover:decoration-4 hover:decoration-accent hover:underline-offset-4">
                Cart
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
