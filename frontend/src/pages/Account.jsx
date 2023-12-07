import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Account() {
  useEffect(() => {
    document.title = "Mac X Mac | Account";
  });

  return (
    <section>
      <h1 className="font-header text-main text-7xl md:text-8xl md:px-2 text-center mt-10">
        Account
      </h1>
      <h2 className="font-mainText text-accent text-lg md:text-2xl text-center">
        Welcome!
      </h2>
      <div className="m-auto text-center mt-4">
        <button className="bg-main p-4 rounded-xl shadow-lg text-secondary font-mainText text-xl">
          <Link to="/Account/Orders"> View Order History</Link>
        </button>
      </div>
    </section>
  );
}
