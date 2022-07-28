import "./styles/style.css";
import React, { useEffect, useContext, useState } from "react";
import shoppingCart from "../../assets/images/CartIcon.png";
import { CartContext } from "../CartContext";
import CartContent from "./CartContent";


export default function ShoppingCart() {
  const cartContext = useContext(CartContext);
  const [cartItemNr, setCartItemNr] = useState(0);
  const [showCart, setShowCart] = useState(null);
  let open = Boolean(showCart);

  useEffect(() => {
    setCartItemNr(cartContext.cartContent.length)
  }, [cartContext])

  const showCartContent = (event) => {
    setShowCart(event.currentTarget);
  }

  const hideCartContent = (event) => {
    setShowCart(null);
    event.stopPropagation();
  }
  
  return (
    <div id="cart-container">
      <div className="cart-container" onClick={showCartContent}>
        <img src={shoppingCart} alt="shopping cart" />
        <span className="mx-1 pt-1">{cartItemNr}</span>
      </div>
      <div>
        <CartContent open={open} anchorEl={showCart} handleClose={hideCartContent} />
      </div>
    </div>
  )
}