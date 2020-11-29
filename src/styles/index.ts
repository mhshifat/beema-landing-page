import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colorPrimary: "#00B997",
};

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .horizontalSlider___281Ls {
    height: 500px;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: #000;
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
