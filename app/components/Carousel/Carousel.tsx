"use client";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./carousel.css";

export interface CarouselProps {
  bannerUrl: string[];
}
export const Carousel = ({ bannerUrl }: CarouselProps) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="carousel-cmp" data-testid="hero-carousel">
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        interval={2000}
        organicArrows={true}
        infinite={true}
        bullets={false}
        mobileTouch={true}
      >
        {bannerUrl.map((banner, index) => (
          <div data-src={banner} key={`banner ${index}`} />
        ))}
      </AutoplaySlider>
    </div>
  );
};
