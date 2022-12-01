import React from "react";
import { useFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";
const ProductList = () => {
  const { filtered_product, grid_view } = useFilterContext();
  return (
    <>
      {grid_view ? (
        <GridView products={filtered_product} />
      ) : (
        <ListView products={filtered_product} />
      )}
    </>
  );
};

export default ProductList;
