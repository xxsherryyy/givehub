import React from "react";
import logo from '../assets/hand.png';
import ImgSrc from '../assets/background.jpg';
import styled from 'styled-components';

const FormImage = styled.div`
    background-image: url(${ImgSrc});
    background-size: cover;
    background-position: bottom;
  height: 100%;
  overflow: hidden;
`;
const Home: React.FC = () => (
    <div>
        <FormImage>
    <header className="App-header">
    <h1>Welcome to GiveHub</h1>
    <a href="#about"><img src={logo} className="App-logo" alt="logo" /></a>
    
    </header>
    </FormImage>
    </div>

);

export default Home;