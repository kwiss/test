import React, { Component } from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 10px;
`;

const MenuItemLink = styled(Link)`
  color: white;
  font-size: 16px;
  text-decoration: none;
  background: white;
  border-radius: 6px;
  color: #333;
  font-weight: bold;
  padding: 4px 6px;
  &:hover {
    background: #61dbfb;
    color: white;
  }
`;

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{"Welcome to the JAVELO CHALLENGE! Good luck ;)"}</p>
        <Menu>
          <MenuItem>
            <MenuItemLink to="/">Home</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/level1">Level - 1</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/level2">Level - 2</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/level3">Level - 3</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/level4">Level - 4</MenuItemLink>
          </MenuItem>
        </Menu>
      </header>
    );
  }
}
export default Header;
