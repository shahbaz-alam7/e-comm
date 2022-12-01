import React from "react";
import styled from "styled-components";
import FeaturedProduct from "./common/FeaturedProduct";
import HeroSection from "./common/HeroSection";
import Services from "./common/Services";
import Trusted from "./common/Trusted";
const Home = () => {
  const data = {
    title: "The Shopsy",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeaturedProduct />
      <Services />
      <Trusted />
    </>
  );
};
const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  width: 200px;
  height: 200px;
`;
export default Home;
