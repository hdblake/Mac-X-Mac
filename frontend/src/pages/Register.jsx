import { useEffect } from "react";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  useEffect(() => {
    document.title = "Mac X Mac | Register";
  });
  return (
    <section className="m-auto">
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-10">
        Register:
      </h1>
      <RegisterForm />
    </section>
  );
}
