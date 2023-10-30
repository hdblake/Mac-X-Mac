import { useEffect } from "react";
import ImageCarousel from "../components/Carousel";

export default function Home() {
  useEffect(() => {
    document.title = "Mac X Mac | Home";
  });

  return (
    <div>
      <h1 className="font-header text-main text-8xl text-center mt-8">
        Welcome
      </h1>
      <p className="text-center font-mainText text-main text-lg w-3/5 m-auto mt-5">
        Hello and welcome to Mac-X-Mac (Mac by Mac). Below are some examples of
        items I have created. Please feel free to explore the rest of the
        website! If you don't see something you are looking for, don't hesitate
        to reach out with any questions or inquiries utilzing the provided
        contact form!
      </p>
      <ImageCarousel />
    </div>
  );
}
