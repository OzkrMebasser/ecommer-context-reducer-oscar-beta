import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ResultsContext } from "./contexts/ResultsContext";
import { CartContext } from "./contexts/CartContext";
import { FavoritesContext } from "./contexts/FavoritesContext";


ReactDOM.render(
  <FavoritesContext>
    <CartContext>
      <ResultsContext>
        <App />
      </ResultsContext>
    </CartContext>
    <div className="App">
      <a
        href="https://wa.me/+919028158330"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>

          </div>
  </FavoritesContext>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// SKIP_PREFLIGHT_CHECK=true