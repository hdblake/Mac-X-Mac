import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Account() {
  useEffect(() => {
    document.title = "Mac X Mac | Account";
  });

  return (
    <section>
      <h1 className="font-header text-main text-7xl md:text-8xl md:px-2 text-center mt-10 underline decoration-2 decoration-accent">
        Account
      </h1>
      <h2 className="font-mainText text-accent text-lg md:text-2xl text-center">
        Welcome!
      </h2>
      <div className="m-auto text-center">
        <button>
          <Link to="/Account/Orders">Order History</Link>
        </button>
      </div>
    </section>
  );
}
