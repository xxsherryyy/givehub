import React from 'react';
import { StyledBurger } from './Burger.styled';

interface BurgerInterface {
	open: boolean;
	setOpen: (boolean: boolean) => void;
}

const Burger = (props:BurgerInterface) => {
  const [open, setOpen] = React.useState(false);
  const isExpanded = open ? true : false;
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;