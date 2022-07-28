import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/style.css";
import React from "react";
import PropTypes from 'prop-types';
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import CarouselArrow from "./CarouselArrow";

export default function Carousel({ carouselData }) {
  const settings = {
    infinite: true,
    dots: false,
    arrows: true,
    nextArrow: <CarouselArrow isNextArrow={true} />,
    prevArrow: <CarouselArrow isNextArrow={false} />,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    className: "slider-container"
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselData.map(item => <CarouselItem item={item} key={item.name} /> )}
      </Slider>
    </div>
  )
}

Carousel.propTypes = {
  carouselData: PropTypes.array
}