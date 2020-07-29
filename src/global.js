import { createGlobalStyle } from 'styled-components';
import px2vw from "px2vw";

export const GlobalStyles = createGlobalStyle`
:root {
  font-size: ${px2vw(24)};
    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }
    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    }
}  
html, body {
    margin: 0;
    padding: 0;
    align-items: center;
    background: #0D0C1D;
    color: #EFFFFA;
    display: flex;
    justify-content: center;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  .App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin 3 1s linear;
    }
  }
  
  .App-header {
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    font-family: arya-triple-alt, sans-serif;
    font-style: normal;
  
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    -100% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(25deg);
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  nav {
    position: absolute;
   
 
    & ul {
        list-style: none;
        display: flex;
         justify-content: space-evenly;
         
    }
    & li {
      margin: 20px;
      font-size: 30px;
    }
    & li a {
      color: #343078;
      text-decoration: none;
    }
 }
  
  img {
    
    height: 50vw;
  
  }
  
  `