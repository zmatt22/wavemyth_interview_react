import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { CartContext } from "../CartContext";
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

export default function CartContent({ open, handleClose, anchorEl }) {
  const cartContext = useContext(CartContext);

  const getTotalPrice = () => {
    let total = 0;
    if (cartContext.cartContent.length !== 0) {
      cartContext.cartContent.map(item => {
        const itemPrice = parseInt(item.price.replaceAll(".", "").split(" ")[0],);
        return total += itemPrice;
      })
    }
    return `${total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} €`;
  }

  const handleCheckout = () => {
    cartContext.setCartContent([]);
    handleClose();
  }

  return (
    <Menu open={open} anchorEl={anchorEl} onClose={handleClose} onClick={handleClose} className="shopping-cart-container" >
      {cartContext.cartContent.length === 0 ?
        <div className="cart-item">
          <span className="py-0 my-0">The shopping cart is empty</span>
        </div> :
        <div>
          {cartContext.cartContent.map((item) => (
            <div className="cart-item" key={item.name}>
              <div className="cart-item-name">
                <span>
                  {item.name}
                  <Tooltip title={`${item.name} ${item.description}`}>
                    <InfoIcon fontSize="small" />
                  </Tooltip>
                </span>
              </div>
              <div className="cart-item-price">{item.price}</div>
            </div>
          ))}
          <div className="cart-item">
            <div className="cart-item-name">TOTAL</div>
            <div className="cart-item-price">{getTotalPrice()}</div>
          </div>
        </div>
      }
      {cartContext.cartContent.length !== 0 && <div className="cart-checkout">
        <button className="primary-btn cart-checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>}

    </Menu>
  )
}

CartContent.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  anchorEl: PropTypes.object
}