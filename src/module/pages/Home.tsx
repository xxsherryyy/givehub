import React from "react";
import logo from '../assets/give-hand.png';

const Home: React.FC = () => (
    <header className="App-header">
    <h1>Welcome to GiveHub</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Learn React
    </a>
    </header>

);

export default Home;