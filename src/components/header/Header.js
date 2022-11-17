import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" className="logo" alt="my logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.div`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 80px;
  }
`;
export default Header;
