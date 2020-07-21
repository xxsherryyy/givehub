import React from 'react';
import { StyledBurger } from './Burger.styled';

interface BurgerInterface {
	open: boolean;
	setOpen: (boolean: boolean) => void;
}

const Burger = (props:BurgerInterface) => {
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;