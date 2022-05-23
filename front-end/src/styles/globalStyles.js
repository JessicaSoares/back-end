import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
    }
    body {
       
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }
`;
