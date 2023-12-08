import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import wallHang from "../images/wall-hang-2.webp";
import navyWedding from "../images/navy-wedding-sign.webp";
import threeKeychains from "../images/three-keychains.webp";
import whiteWedding from "../images/white-wedding-sign.webp";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
  useEffect(() => {
    document.title = "Mac X Mac | Home";
  });

  const location = useLocation();
  const message = location.state?.message || "";

  const images = [wallHang, navyWedding, threeKeychains, whiteWedding];

  return (
    <div>
      <h1 className="font-header text-main text-7xl md:text-8xl text-center mt-8">
        Welcome
      </h1>
      {message && (
        <p className="font-mainText text-accent text-md md:text-lg text-center">
          {message}
        </p>
      )}
      <p className="text-center font-mainText text-main text-md md:text-lg w-3/5 m-auto mt-5">
        Hello and welcome to Mac-X-Mac (Mac by Mac). Below are some examples of
        items I have created. Please feel free to explore the rest of the
        website! If you don't see something you are looking for, don't hesitate
        to reach out with any questions or inquiries utilzing the provided
        contact form!
      </p>
      <ImageCarousel images={images} />
    </div>
  );
}
