import { Link } from "react-router-dom";
import { useState } from "react";
import { sizePricing, signTypes } from "../data/signs";

export default function Signs({ addToCart }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedSizePrice, setSelectedSizePrice] = useState(0);
  const [selectedColor, setSelectColor] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [quantity, setQuantity] = useState(1);
  const name = "Sign";

  const handleSize = (event) => {
    const selectedValue = event.target.value;
    const selectedProduct = sizePricing.find(
      (item) => item.size === selectedValue,
    );

    if (selectedProduct) {
      setSelectedSize(selectedProduct.size);
      setSelectedSizePrice(selectedProduct.price);
    } else {
      setSelectedSize("");
      setSelectedSize(0);
    }
  };

  const handleType = (event) => {
    setSelectedType(event.target.value);
  };

  const handleColor = (event) => {
    setSelectColor(event.target.value);
  };

  const handleText = (event) => {
    setSelectedText(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const handleAddToCart = (name, size, price, type, color, text, quantity) => {
    addToCart({ name, size, price, type, color, text, quantity });
  };

  return (
    <section>
      <h1 className="font-header text-main text-8xl text-center mt-10">
        Signs
      </h1>
      <p className="text-accent font-mainText text-lg text-center mt-6">
        *If you want specific customization, please use the{" "}
        <Link to="/Contact" className="text-main">
          contact form
        </Link>
        *
      </p>
      <div className="flex justify-center mt-8">
        <div className="p-4 border border-4 border-main shadow-lg rounded-xl">
          <p className="font-mainText text-accent text-lg">Name: {name}</p>
          <label
            htmlFor="sign-size"
            className="font-mainText text-accent text-lg mr-2 mt-4"
          >
            Size:{" "}
          </label>
          <select
            name="sign-size"
            id="sign-size"
            className="text-lg bg-secondary border border-main border-2 rounded-lg p-1 text-accent font-mainText mt-4"
            value={selectedSize}
            onChange={handleSize}
          >
            <option value="DEFAULT" hidden>
              --select size--
            </option>
            {sizePricing &&
              sizePricing.map((item) => (
                <option
                  className="text-main font-accentText font-bold border border-main border-2"
                  value={item.size}
                  key={item.size}
                >
                  {item.size}
                </option>
              ))}
          </select>
          {selectedSize ? (
            <p className="font-mainText text-accent text-lg mt-4">
              Price: ${selectedSizePrice}
            </p>
          ) : (
            <p className="font-mainText text-accent text-lg mt-4">
              Price: $0.00
            </p>
          )}
          <label
            htmlFor="sign-type"
            className="font-mainText text-accent text-lg mr-2 mt-4"
          >
            Type:{" "}
          </label>
          <select
            name="sign-type"
            id="sign-type"
            className="text-lg bg-secondary border border-main border-2 rounded-lg p-1 text-accent font-mainText mt-4"
            value={selectedType}
            onChange={handleType}
          >
            <option value="DEFAULT" hidden>
              --select type--
            </option>
            {signTypes &&
              signTypes.map((item) => (
                <option
                  value={item.type}
                  key={item.id}
                  className="text-main font-accentText font-bold border border-main border-2"
                >
                  {item.type}
                </option>
              ))}
          </select>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="color"
              className="font-mainText text-accent text-lg"
            >
              Color:{" "}
            </label>
            <input
              type="text"
              id="color"
              placeholder="Color(s)/color scheme"
              className="border border-2 border-main focus:border focus:border-2 focus:border-accent outline-none rounded-lg text-accent font-mainText p-1"
              value={selectedColor}
              onChange={handleColor}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="sign-text"
              className="font-mainText text-accent text-lg"
            >
              Text:{" "}
            </label>
            <textarea
              name="sign-text"
              id="sign-text"
              rows="5"
              cols="25"
              placeholder="Text/message you would like on sign"
              className="border border-2 border-main focus:border focus:border-2 focus:border-accent outline-none rounded-lg text-accent font-mainText p-1"
              onChange={handleText}
            ></textarea>
          </div>
          <div className="mt-4">
            <label
              className="font-mainText text-accent text-md md:text-lg mr-2"
              htmlFor="quantity"
            >
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              step="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="font-mainText text-accent text-md md:text-lg w-1/4 text-center"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="font-mainText text-secondary bg-main py-2 rounded-lg mt-4 shadow-md w-2/5"
              onClick={() =>
                handleAddToCart(
                  name,
                  selectedSize,
                  selectedSizePrice,
                  selectedType,
                  selectedColor,
                  selectedText,
                  quantity,
                )
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
