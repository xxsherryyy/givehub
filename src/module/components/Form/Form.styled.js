import styled from 'styled-components';

export const StyledForm= styled.form`

form {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 100px;
    min-height: 400px;
    padding: 20px 40px 40px 40px;
    border-radius: 6px;
    box-shadow: 0px 8px 36px #222;
    background-color: #fefefe;
}
input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    height: 5vh;
    width: 50vw;
    font-size: 24px;
    font-family: continuo,sans-serif;
font-weight: 400;
font-style: normal;;
}
  }
  input, select {
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px solid #d6d1d5;
    margin-top: 5px;
    height: 5vh;
    font-size: 24px;
    font-family: continuo,sans-serif;
    font-weight: 400;
font-style: normal;;
  }
  select {
    display: block;
    width: 100%;
    height: 5vh;
    font-family: continuo,sans-serif;
    font-weight: 400;
font-style: normal;
font-size: 24px;
  }
  .select-selected{
      font-size: 20px;
      font-family: continuo,sans-serif;
      font-weight: 400;
  font-style: normal;
  font-size: 24px;
  }
  button {
    min-width: 100%;
    cursor: pointer;
    margin-right: 0.25em;
    margin-top: 1.5em;
    padding: 	0.938em;
    border: #343078;
    border-radius: 4px;
    background-color: #22223B;
    color: #fefefe;
    font-size: 24px;
    font-family: continuo,sans-serif;
    font-weight: 500;
font-style: normal;

  }
  button:hover {
    background-color: #343078;
    color: #fefefe;
  }
  .error {
    color:#db2269;
    font-size: 0.5em;
    display: relative;
  }
  
`