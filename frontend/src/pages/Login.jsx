import { useEffect } from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  useEffect(() => {
    document.title = "Mac X Mac | Login";
  });
  return (
    <section className="m-auto">
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-10">
        Login:
      </h1>
      <LoginForm />
    </section>
  );
}
