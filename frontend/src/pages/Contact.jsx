import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  useEffect(() => {
    document.title = "Mac X Mac | Contact";
  });
  return (
    <section>
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-10">
        Contact
      </h1>
      <p className="text-center font-mainText text-main text-lg w-3/5 m-auto mt-6">
        Please use the form below to send me any inquires or questions you might
        have. I will do my best to respond in a timely manner!
      </p>
      <ContactForm />
    </section>
  );
}
