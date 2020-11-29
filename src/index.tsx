import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyles from "./styles";

const root = (
  <BrowserRouter>
    <GlobalStyles />
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById("root"));
