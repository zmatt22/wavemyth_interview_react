import React, { useContext } from "react";
import Carousel from "../components/Carousel/Carousel";
import TravelPlan from "../components/TravelPlan/TravelPlan";
import TravelDesc from "../components/TravelDesc/TravelDesc";
import carouselData from "../data/appData";
import { CartContext } from "../components/CartContext";


export default function Home() {
  const cartContext = useContext(CartContext);

  const handleCheckout = () => {
    cartContext.setCartContent([]);
  }

  return (
    <div className="home-container">
      <Carousel carouselData={carouselData} />
      <TravelPlan />
      <TravelDesc />
      <div className="checkout-btn-container">
        <button onClick={handleCheckout} className="primary-btn">Checkout</button>
      </div>
    </div>
  )
}