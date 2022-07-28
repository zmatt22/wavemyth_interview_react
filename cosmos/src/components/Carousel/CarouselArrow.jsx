import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
export default function CarouselArrow({ isNextArrow, style, onClick }) {
  return (
    <div className={`carousel-arrow-container ${isNextArrow ? "carousel-arrow-next" : "carousel-arrow-prev"}`} onClick={onClick} style={{ ...style }}>
      {isNextArrow ? <KeyboardArrowRightIcon fontSize="large" /> : <KeyboardArrowLeftIcon fontSize="large" />}
    </div>
  )
}