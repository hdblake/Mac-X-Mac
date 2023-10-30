import { useEffect } from "react";

export default function Products() {
  useEffect(() => {
    document.title = "Mac X Mac | Products";
  });

  return (
    <section>
      <h1 className="font-header text-main text-8xl text-center mt-10 underline decoration-2 decoration-accent">
        Products
      </h1>
    </section>
  );
}
