import React from 'react';
import { StyledBurger } from './Burger.styled';


const Burger = () => {

  const [open, setOpen] = React.useState(false);

  return (
    <div onClick={() => setOpen(!open)}>
      <StyledBurger aria-label="Toggle menu">
        <div />
        <div />
        <div />
      </StyledBurger>
    </div>

  )
}

export default Burger;