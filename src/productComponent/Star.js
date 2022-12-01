import React from "react";
import styled from "styled-components";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
const Star = ({ stars, reviews }) => {
  const ratings = Array.from({ length: 5 }, (_, i) => {
    let num = i + 0.5;
    // debugger;
    return (
      <span key={i}>
        {stars >= i + 1 ? (
          <FaStar className="icon" />
        ) : stars >= num ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <FiStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="icon-style">
        {ratings}
        <p>{reviews} Customers Reviewed</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;
export default Star;
