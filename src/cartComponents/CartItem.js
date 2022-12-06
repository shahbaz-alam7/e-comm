import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import QtyToggle from "./QtyToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";
const CartItem = ({ id, name, qty, currColor, image, price, maxQty }) => {
  const { deleteItem, increaseQty, decreaseQty } = useCartContext();
  return (
    <>
      <div className="cart-heading grid-five-column grid">
        <div className="cart-image--name">
          <div>
            <figure>
              <img src={image} alt={id} />
            </figure>
          </div>
          <div>
            <p>{name}</p>
            <div className="color-div">
              <p>Color:</p>
              <p className="color-style" style={{ background: currColor }}></p>
            </div>
          </div>
        </div>
        <div className="cart-hide">
          <p>
            <FormatPrice price={price} />
          </p>
        </div>
        <QtyToggle
          qty={qty}
          increaseQty={() => increaseQty(id)}
          decreaseQty={() => decreaseQty(id)}
        />
        <div className="cart-hide">
          <p>
            <FormatPrice price={price * qty} />
          </p>
        </div>
        <div>
          <FaTrash className="remove_icon" onClick={() => deleteItem(id)} />
        </div>
      </div>
    </>
  );
};

export default CartItem;
