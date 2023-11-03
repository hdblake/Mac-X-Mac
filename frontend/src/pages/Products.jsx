import { useEffect } from "react";
import { Link } from "react-router-dom";
import ornaments from "../images/ornaments.webp";
import ourWedding from "../images/our-wedding.webp";

export default function Products() {
  useEffect(() => {
    document.title = "Mac X Mac | Products";
  });

  return (
    <section>
      <h1 className="font-header text-main text-8xl text-center mt-10 underline decoration-2 decoration-accent">
        Products
      </h1>
      <p className="text-center font-mainText text-main text-lg w-3/5 m-auto mt-6">
        Please select one of the product categories below:
      </p>
      <div className="flex flex-col lg:flex-row justify-center align-center mt-8">
        <div className="my-4 lg:my-0 lg:mx-6">
          <Link to="/Products/Macrame">
            <h2 className="font-mainText text-main text-2xl text-center">
              Macrame
            </h2>
            <img
              src={ornaments}
              alt="ornaments macrame"
              className="rounded-xl shadow-lg mt-2"
            />
          </Link>
        </div>
        <div className="my-4 lg:my-0 lg:mx-6">
          <Link to="/Products/Signs">
            <h2 className="font-mainText text-main text-2xl text-center">
              Signs
            </h2>
            <img
              src={ourWedding}
              alt="sign from our wedding"
              className="rounded-xl shadow-lg mt-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
