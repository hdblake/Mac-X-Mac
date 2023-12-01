import { Link } from "react-router-dom";
import mainLogo from "../images/macxmac.png";
import Navigation from "./Navigation";

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
          <Link to="/Login">Login</Link>
        </span>
        <span className="font-mainText font-bold text-accent text-xl"> | </span>
        <span className="font-mainText font-bold text-secondary text-xl">
          <Link to="/Register">Register</Link>
        </span>
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
}
