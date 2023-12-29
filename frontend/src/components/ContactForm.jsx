import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Form successfully sent!"))
      .catch((err) => alert(err));
  }

  return (
    <form
      name="contact"
      className="my-6 bg-main px-8 py-6 rounded-xl shadow-lg w-3/4 md:w-2/5 m-auto"
      // eslint-disable-next-line react/no-unknown-property
      netlify
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-start mb-6 gap-y-3">
        <label
          htmlFor="name"
          className="text-secondary text-2xl font-bold underline decoration-accent decoration-4 underline-offset-4 font-mainText"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="bg-secondary rounded-lg h-12 focus:border focus:border-4 focus:border-accent outline-none font-bold p-2 shadow focus:shadow-lg font-mainText"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-start mb-6 gap-y-3">
        <label
          htmlFor="email"
          className="text-secondary text-2xl font-bold underline decoration-accent decoration-4 underline-offset-4 font-mainText"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="bg-secondary rounded-lg h-12 focus:border focus:border-4 focus:border-accent outline-none font-bold p-2 shadow focus:shadow-lg font-mainText"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-start mb-6 gap-y-3">
        <label
          htmlFor="message"
          className="text-secondary text-2xl font-bold underline decoration-accent decoration-4 underline-offset-8 font-mainText mb-2"
        >
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          required
          className="bg-secondary rounded-lg h-64 focus:border focus:border-4 focus:border-accent outline-none font-bold p-2 shadow focus:shadow-lg"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="block m-auto text-center bg-accent transition duration-300 ease-in hover:-translate-y-1 hover:scale-105 p-4 text-secondary font-bold text-lg rounded-xl w-1/3 border border-2 border-accent2 hover:bg-accent2 hover:text-secondary"
      >
        Submit
      </button>
    </form>
  );
}
