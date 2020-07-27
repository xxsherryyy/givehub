import React from 'react';
import {StyledNavBar} from './NavBar.styled'
import logo from '../../assets/hand.png';

const NavBar = () => {


  return (
    <StyledNavBar>
    <nav>
      <ul>
        <li>
        <a href="/"><img src={logo} alt="logo" />
          GiveHub</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul></nav>
</StyledNavBar>
  )
}

export default NavBar;