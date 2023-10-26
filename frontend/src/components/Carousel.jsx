import { Carousel, IconButton } from "@material-tailwind/react";
import wallHang from "../images/wall-hang-2.webp";
import navyWedding from "../images/navy-wedding-sign.webp";
import threeKeychains from "../images/three-keychains.webp";
import whiteWedding from "../images/white-wedding-sign.webp";

export default function ImageCarousel() {
  return (
    <div>
      <h2 className="font-header text-center mt-6 text-5xl text-main underline decoration-2 decoration-accent">
        Examples
      </h2>
      <Carousel
        className="rounded-xl h-5/6 w-5/6 xl:h-1/2 xl:w-1/2 m-auto my-8 relative"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                  activeIndex === i ? "bg-accent" : "bg-accent/70"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        transition={{ duration: 2 }}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="#c5d6be"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-10 -translate-y-2/4 text-main hover:bg-transparent hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="#c5d6be"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-10 -translate-y-2/4 text-main hover:bg-transparent hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <img
          src={threeKeychains}
          alt="wall hang"
          className="m-auto rounded-xl h-auto w-auto object-cover"
        />
        <img
          src={navyWedding}
          alt="wall hang"
          className="m-auto rounded-xl h-auto w-auto object-cover"
        />
        <img
          src={wallHang}
          alt="wall hang"
          className="m-auto rounded-xl h-auto w-auto object-cover"
        />
        <img
          src={whiteWedding}
          alt="wall hang"
          className="m-auto rounded-xl h-auto w-auto object-cover"
        />
      </Carousel>
    </div>
  );
}
