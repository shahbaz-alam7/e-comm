import React, { useState } from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import { Button } from "../styles/Button";
import QtyIncDecComp from "../helpers/QtyIncDecComp";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
const AddToCart = ({ product }) => {
  const { addtoCart } = useCartContext();
  const { id, stock, colors } = product;

  const [currColor, setCurrColor] = React.useState(colors[0]);
  const [qty, setQty] = useState(1);
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:{" "}
          {colors.map((item, i) => {
            return (
              <button
                className={currColor === item ? "btnStyle active" : "btnStyle"}
                style={{ backgroundColor: item }}
                key={i}
                onClick={() => setCurrColor(colors[i])}
              >
                {currColor === item ? <BsCheck className="icon" /> : null}
              </button>
            );
          })}
        </p>
      </div>
      <QtyIncDecComp
        qty={qty}
        stock={stock}
        setQty={setQty}
        // decreaseQty={decreaseQty}
        // increaseQty={increaseQty}
      />
      <NavLink
        to="/cart"
        onClick={() => addtoCart(id, currColor, qty, product)}
      >
        <Button>Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    text-align: center;

    &:hover {
      opacity: 1;
    }
    .icon {
      color: #fff;
      font-size: 20px;
    }
  }

  .active {
    opacity: 1;
  }

  /* we can use it as a global one too  */
`;
export default AddToCart;
