import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { CartContext } from "../CartContext";

export default function CarouselItem({ item }) {
  const cartContent = useContext(CartContext);

  const addToCart = () => {
    cartContent.setCartContent(prevState => {
      const itemCartInfo = {
        name: item.name,
        description: `${item.description} ${item.travelTip}`,
        price: item.price
      }
      let newState = [...prevState];
      newState.push(itemCartInfo);
      return newState;
    })
  }

  return (
    <div className="carousel-item-container">
      <div className="carousel-item-img-container">
        <img src={item.image} alt="carousel item" />
        <div className="carousel-item-img-desc">
          <label className="fw-bold">{item.name.toUpperCase()}</label>
          <label>{item.location}</label>
          <label>Distance: {item.distance}</label>
          <label>AUPopulation: {item.population}</label>
        </div>
      </div>
      <div className="carousel-item-desc-container">
        <div className="carousel-item-desc">
          <h3 className="mb-3"><strong>{item.name[0]}</strong>{item.name.slice(1)}</h3>
          <p>{item.description}</p>
          <p>{item.travelTip}</p>
        </div>
        <div className="carousel-item-purch-container">
          <div>
            <span className="price-label">{item.price}</span>
            <span className="ticket-desc">{item.ticketDescription}</span>
          </div>
          <div>
            <button onClick={addToCart} className="primary-btn">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );

  
}

CarouselItem.propTypes = {
  item: PropTypes.object
}