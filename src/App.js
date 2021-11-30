import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Productspage } from "./pages/Productspage";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { SingleProductPage } from "./pages/SingleProductPage";
import { Favoritespage } from "./pages/Favoritespage";
import  Login  from "./pages/Login";
import Checkout from "./pages/Checkout";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#0069cc",
    },
    secondary: {
      main: "#04009A",
    },

    third: {
      main: '#062C80'
    },
    error: {
      main: '#FF0000'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Router>
        <Route path="/" component={Homepage} exact />
        <Route path="/products" component={Productspage} exact />
        <Route
          path="/products/product/:id"
          component={SingleProductPage}
          exact
        />
        <Route path="/favourite products" component={Favoritespage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/payment" component={Checkout} exact />

      </Router>
      
    </ThemeProvider>
  );
}

export default App;
