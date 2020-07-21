import React from "react";
import logo from '../assets/give-hand.png';

const Home: React.FC = () => (
    <header className="App-header">
    <h1>Welcome to your PWA!</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
    Edit <code>src/App.tsx</code> and save to reload.
    </p>
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