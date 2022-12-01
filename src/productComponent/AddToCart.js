import React, { useState } from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import { Button } from "../styles/Button";
import QtyIncDecComp from "../helpers/QtyIncDecComp";
import { NavLink } from "react-router-dom";
const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [currColor, setCurrColor] = React.useState(0);
  const [qty, setQty] = useState(1);
  const increaseQty = () => {
    qty < stock ? setQty(qty + 1) : setQty(stock);
  };
  const decreaseQty = () => {
    qty > 1 ? setQty(qty - 1) : setQty(1);
  };
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:{" "}
          {colors.map((item, i) => {
            return (
              <button
                className={currColor == i ? "btnStyle active" : "btnStyle"}
                style={{ backgroundColor: item }}
                key={i}
                onClick={() => setCurrColor(i)}
              >
                {currColor == i ? <BsCheck className="icon" /> : null}
              </button>
            );
          })}
        </p>
      </div>
      <QtyIncDecComp
        qty={qty}
        decreaseQty={decreaseQty}
        increaseQty={increaseQty}
      />
      <NavLink to="/cart">
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
