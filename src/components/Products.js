import React from "react";
import styled from "styled-components";
import Filter from "../productComponent/Filter";
import ProductList from "../productComponent/ProductList";
import Sort from "../productComponent/Sort";

const Products = () => {
  return (
    <Wrapper>
      <div className="grid container grid-filter-column">
        <div>
          <Filter />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
