"use client";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./carousel.css";
export const Carousel = () => {
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
        <div data-src="/assets/banner2.avif" />
        <div data-src="/assets/banner3.jpeg" />
        <div data-src="/assets/banner4.jpeg" />
        <div data-src="/assets/banner1.webp" />
      </AutoplaySlider>
    </div>
  );
};
