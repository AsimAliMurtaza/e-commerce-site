import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart, cartTotal } = useContext(CartContext);

  const CLearItemHandler = ()=> clearItemFromCart(cartItem)
  const AddItemHandler = ()=> addItemToCart(cartItem)

  const removeItemHandler = ()=> removeItemFromCart(cartItem)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span>
          {quantity}
        </span>
        <div className="arrow" onClick={AddItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={CLearItemHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
