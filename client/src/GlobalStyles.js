import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
      --color-primary: #61DAFB;
      --color-danger: #FF0060;
      --color-success: #1B9C85;
      --color-warning: #F7D060; 

      --color-white:#FFFF;
      --color-off-white:#cccccc;
      --color-black:#1f1f1f;
      --color-green:#1D261C;
      --color-yellow:#F29A2E;
      --font-roboto:'Roboto', sans-serif;
      --footer-padding:3rem; 
    }

::-webkit-scrollbar {
  width: 0rem;
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: #797979;
  transition: all 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  background: #222224;
}

::-webkit-scrollbar-track {
  background: #363949;
}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    appearance: 0;
    border: 0;
    text-decoration:none;
    box-sizing: border-box;
  
}

html {

  scroll-behavior: smooth;

}

body{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-family: var(--font-roboto);

}

`;
