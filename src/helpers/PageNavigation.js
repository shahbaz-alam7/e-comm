import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home/</NavLink>
      {title}
    </Wrapper>
  );
};

export default PageNavigation;
const Wrapper = styled.section`
  height: 10rem;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 3.2rem;
  padding-left: 1.2rem;
  a {
    font-size: 3.2rem;
  }
`;
