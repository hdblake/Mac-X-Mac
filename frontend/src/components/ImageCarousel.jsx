import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
