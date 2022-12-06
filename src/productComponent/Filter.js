import React from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";
import FormatPrice from "../helpers/FormatPrice";
import { Button } from "../styles/Button";
const Filter = () => {
  const {
    filters: { text, category, maxPrice, price, color },
    all_product,
    reset,
    updateFilterValue,
  } = useFilterContext();

  const getUniqeData = (data, attr) => {
    let newVal = data.map((item) => {
      return item[attr];
    });
    if (attr === "colors") {
      // old methd
      // return ["All", ...new Set([].concat(...newVal))];
      // new  method
      newVal = newVal.flat();
    }
    return (newVal = ["All", ...new Set(newVal)]);
  };
  const uniqueCategories = getUniqeData(all_product, "category");
  const uniqueCompanies = getUniqeData(all_product, "company");
  const uniqueColors = getUniqeData(all_product, "colors");
  return (
    <Wrapper>
      <div className="filter-search">
        <form>
          <input
            type="text"
            name="text"
            placeholder="Search..."
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {uniqueCategories.map((item, i) => {
            return (
              <button
                name="category"
                value={item}
                onClick={updateFilterValue}
                key={i}
                className={category === item ? "active" : ""}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <select
          name="company"
          className="filter-company--select"
          onClick={updateFilterValue}
        >
          {uniqueCompanies.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item.toUpperCase()}
              </option>
            );
          })}
        </select>

        {/* </div> */}
      </div>
      <div className="filter-colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {uniqueColors.map((item, i) => {
            if (item === "All") {
              return (
                <button
                  key={item}
                  className="color-all--style"
                  name="color"
                  value={item}
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            } else {
              return (
                <button
                  key={item}
                  className={item === color ? "btnStyle active " : "btnStyle"}
                  name="color"
                  value={item}
                  onClick={updateFilterValue}
                  style={{ background: item }}
                >
                  {item === color ? <BsCheck className="checkStyle" /> : null}
                </button>
              );
            }
          })}
        </div>
      </div>
      <div className="filter-range">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <div className="filter_price">
          <input
            type="range"
            min="0"
            max={maxPrice + 4000000}
            value={price}
            name="price"
            onChange={updateFilterValue}
          />
        </div>
      </div>
      <div className="filter-clear">
        <Button className="btn" onClick={reset}>
          Clear Filter
        </Button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    /* justify-content: center; */
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
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

    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 2rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default Filter;
