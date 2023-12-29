import { useEffect, useState } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Mac X Mac | Contact";
  });

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
      headers: { "Content-Type": "application/x-www-form-urlencode" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Form successfully sent!"))
      .catch((err) => alert(err));
  }

  return (
    <section id="contact">
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-10">
        Contact
      </h1>
      <p className="text-center font-mainText text-main text-lg w-3/5 m-auto mt-6">
        Please use the form below to send me any inquires or questions you might
        have. I will do my best to respond in a timely manner!
      </p>
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
    </section>
  );
}
