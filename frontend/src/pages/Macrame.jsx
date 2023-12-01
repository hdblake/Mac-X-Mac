import { useEffect } from "react";
import { macrame } from "../data/macrame";

export default function Macrame() {
  useEffect(() => {
    document.title = "Mac X Mac | Macrame";
  });

  return (
    <section>
      <h1 className="font-header text-main text-7xl md:text-8xl md:px-2 text-center mt-10 underline decoration-2 decoration-accent">
        Macrame
      </h1>
      {macrame &&
        macrame.map((product, i) => (
          <div
            key={i}
            className="flex flex-col justify-center align-center w-80 p-2 md:w-[525px] m-auto"
          >
            <h2 className="text-center text-main font-mainText text-2xl mt-8">
              {product.name}
            </h2>
            <div className="flex flex-col gap-y-2 md:flex-row justify-evenly items-center rounded-xl shadow-lg mt-4 p-2 border border-main border-4">
              <div>
                <img
                  src={product.image}
                  alt="picture"
                  width={225}
                  height={300}
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-y-4 ml-2">
                <p className="font-mainText text-accent text-md md:text-lg">
                  Price: ${product.price}
                </p>
                <div className="flex flex-row md:flex-col items-center md:items-start md:flex-col">
                  <label
                    className="font-mainText text-accent text-md md:text-lg sm:mr-2 md:mr-0"
                    htmlFor="color-select"
                  >
                    Color:
                  </label>
                  <select
                    name="colors"
                    id="color-select"
                    className="bg-secondary border border-main border-2 rounded-lg p-1 text-accent font-mainText"
                    defaultValue={"DEFAULT"}
                    // onChange={handleColor}
                  >
                    <option value="DEFAULT" disabled hidden>
                      --select color--
                    </option>
                    {product.colors.map((color) => (
                      <option
                        className="text-main font-accentText border border-main border-2"
                        key={color}
                        value={color}
                      >
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <label
                  htmlFor="quantity"
                  className="font-mainText text-accent text-lg mr-2"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={quantityChange}
                /> */}
                <button
                  className="font-mainText text-secondary bg-main py-2 rounded-lg"
                  // onClick={() => addToCart(product, selectValue)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
