import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../helpers/FormatPrice";

const Product = (item) => {
  const { id, name, image, price, category } = item;
  return (
    <NavLink to={`/productSpecification/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt="img" />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">
              <FormatPrice price={price} />
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
