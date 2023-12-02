import { Link } from "react-router-dom";
import mainLogo from "../images/macxmac.png";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header({ loggedIn, logout }) {
  const [firstName, setFirstName] = useState(null);

  useEffect(() => {
    const fetchName = async () => {
      try {
        setFirstName(localStorage.getItem("firstName"));
      } catch (err) {
        console.log(err);
      }
    };
    fetchName();
  }, []);

  return (
    <header>
      <div className="flex flex-col justify-center align-center items-center p-3">
        <Link to="/">
          <img src={mainLogo} alt="logo" width={200} height={200} />
        </Link>
        {loggedIn ? (
          <p className="text-accent text-2xl font-bold font-mainText">
            Welcome {firstName}!
          </p>
        ) : null}
      </div>
      <div className="bg-main p-2 text-center">
        <span className="font-mainText font-bold text-secondary text-xl">
          {loggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link to="/Login">Login</Link>
          )}
        </span>
        <span className="font-mainText font-bold text-accent text-xl"> | </span>
        <span className="font-mainText font-bold text-secondary text-xl">
          {loggedIn ? (
            <Link to="/Account">Account</Link>
          ) : (
            <Link to="/Register">Register</Link>
          )}
        </span>
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
}
