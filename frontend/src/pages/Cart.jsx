import { useEffect } from "react";

export default function Cart() {
  useEffect(() => {
    document.title = "Mac X Mac | Cart";
  });

  return (
    <section>
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-10 underline decoration-2 decoration-accent">
        Cart
      </h1>
    </section>
  );
}
