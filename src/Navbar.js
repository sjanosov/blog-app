import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.div`
  font-size: 5vh;
`;

const MyNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background: #696773;
  color: white;
  height: 15vh;
  box-shadow: 0 2px 4px #696773;
`;

const StyledMenu = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 30vw;
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 3vh;

  &:hover {
    border-bottom: 1px solid white;
  }
`;

export default class Navbar extends Component {
  render() {
    return (
      <MyNavbar>
        <Logo>Mudita Sanctuary</Logo>
        <StyledMenu>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/About">About</StyledLink>
          <StyledLink to="/Contact">Contact</StyledLink>
        </StyledMenu>
      </MyNavbar>
    );
  }
}
