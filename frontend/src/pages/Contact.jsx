import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  useEffect(() => {
    document.title = "Mac X Mac | Contact";
  });

  return (
    <section id="contact">
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-10">
        Contact
      </h1>
      <ContactForm />
    </section>
  );
}
