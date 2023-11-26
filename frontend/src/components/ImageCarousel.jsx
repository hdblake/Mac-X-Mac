import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { HiArrowSmRight } from "react-icons/hi";
// import { HiArrowSmRLeft } from "react-icons/hi";

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#c5d6be" }}
      onClick={onClick}
    />
  );
}

export default function ImageCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    // prevArrow: <HiArrowSmRLeft />,
  };

  return (
    <div className="rounded-xl h-5/6 w-5/6 xl:h-1/2 xl:w-1/2 m-auto my-8 relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide #${index}`}
              className="m-auto rounded-xl h-auto w-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
