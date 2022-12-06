import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
const QtyIncDecComp = ({ qty, stock, setQty }) => {
  const increaseQty = () => {
    qty < stock ? setQty(qty + 1) : setQty(stock);
  };
  const decreaseQty = () => {
    qty > 1 ? setQty(qty - 1) : setQty(1);
  };
  return (
    <Wrapper>
      <div className="cart-button">
        <div className="qty-toggle">
          <button onClick={decreaseQty}>
            <FaMinus />
          </button>
          <div className="qty-style">{qty}</div>
          <button onClick={increaseQty}>
            <FaPlus />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .qty-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .qty-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default QtyIncDecComp;
