import React from "react";
import logo from '../assets/hand.png';

const Home: React.FC = () => (
    <header className="App-header">
    <h1>Welcome to GiveHub</h1>
    <a href="/About"><img src={logo} className="App-logo" alt="logo" /></a>
    
    </header>

);

export default Home;