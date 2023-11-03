import { useEffect } from "react";
import { macrame } from "../data/macrame";

export default function Macrame() {
  return (
    <section>
      <h1 className="font-header text-main text-8xl text-center mt-10 underline decoration-2 decoration-accent">
        Macrame
      </h1>
      {macrame &&
        macrame.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center align-center w-1/3 m-auto"
          >
            <h2 className="text-center text-main font-mainText text-2xl mt-8">
              {item.name}
            </h2>
            <div className="flex flex-row justify-between items-center rounded-xl shadow-lg mt-4 p-2 border border-main border-2">
              <div>
                <img
                  src={item.image}
                  alt="picture"
                  width={225}
                  height={300}
                  className="rounded-xl"
                />
              </div>
              <div>
                <p className="font-mainText text-accent text-lg">
                  ${item.price}
                </p>
                <label
                  className="font-mainText text-accent text-lg mr-2"
                  htmlFor="color-select"
                >
                  Color:
                </label>
                <select
                  name="colors"
                  id="color-select"
                  className="bg-secondary border border-main border-2 rounded-lg p-1 text-accent font-mainText"
                >
                  {item.colors.map((color) => (
                    <option
                      className="text-main font-accentText border border-main border-2"
                      value={color}
                    >
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
