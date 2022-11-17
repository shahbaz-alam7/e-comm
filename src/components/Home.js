import React from "react";
import styled from "styled-components";
const Home = () => {
  return <Wrapper>Home</Wrapper>;
};
const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  width: 200px;
  height: 200px;
`;
export default Home;
