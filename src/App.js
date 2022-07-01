import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Tourspage } from "./pages/Tourspage";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { SingleTourPage } from "./pages/SingleTourPage";
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
        <Route path="/tours" component={Tourspage} exact />
        <Route
          path="/tours/tour/:id"
          component={SingleTourPage}
          exact
        />
        <Route path="/favourite tours" component={Favoritespage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/payment" component={Checkout} exact />

      </Router>
      
    </ThemeProvider>
  );
}

export default App;
