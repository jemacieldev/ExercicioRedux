import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family : Roboto, sans-serif;
        overflow-x: hidden;
    }

    body {
        background-color:rgb(231, 228, 219);
    }
`

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
     width: 100%;
    }
`