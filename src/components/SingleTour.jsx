import React from "react";
import {
  
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
  CardMedia,
  IconButton,

} from "@material-ui/core";

import { useCart } from "../contexts/CartContext";
import { checkIfInCart } from "../actions/checkIfInCart";
import { CgArrowLongLeft } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { marginer } from "../actions/marginer";
import { useFavoriteTours } from "../contexts/FavoritesContext";


const useStyles = makeStyles({
  root: {
    marginTop: "4rem",
    marginBottom: "4rem",
  },
  inStock: {
    marginBottom: "4rem",
  },
  tourDescription: {
    marginBottom: "2rem",
  },
  tourImage: {
    width: "100%",
    height: "100%",
    backgroundSize: "contain",
    minHeight: "30vh",
  },
  price: {
    marginBottom: "1rem",
  },
  arrowBtn: {
    maxWidth: "fit-content",
    marginTop: "0.3rem",
  },
});

export const SingleTour = ({
  tour,
  tourimg,
  tourdesc,
  tourtitle,
  tourprice,
}) => {
  const classes = useStyles();
  const { dispatch, cartItems } = useCart();
  const { dispatchFavs } = useFavoriteTours();

  const history = useHistory();
  const addToCart = (tour) => {
    dispatch({ type: "ADD_TO_CART", tour });
  };

  const addToFavs = (tour) => {
    dispatchFavs({
      type: "ADD_TO_FAVORITES",
      tour,
    });
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CardMedia className={classes.tourImage} image={tourimg} />
        </Grid>
        <Grid container item xs={12} md={6} direction="column">
          <Grid item>
            <Typography variant="h4">{tourtitle}</Typography>

            <Typography
              variant="caption"
              display="block"
              color="secondary"
              className={classes.inStock}
            >
              In Stock
            </Typography>
          </Grid>
          <Typography variant="body2" className={classes.tourDescription}>
            {tourdesc}
          </Typography>

          <Typography variant="subtitle2" className={classes.price}>
            Precio: ${tourprice.toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={() => addToCart(tour)}
            disabled={checkIfInCart(cartItems, tour.id) ? true : false}
          >
            {checkIfInCart(cartItems, tour.id)
              ? "EN CARRITO"
              : "AGREGAR AL CARRITO"}
          </Button>
          
    
          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
            style={marginer("1rem")}
          >
            <IconButton
              className={classes.arrowBtn}
              color="primary"
              onClick={() => history.goBack()}
            >
              <CgArrowLongLeft />
            </IconButton>
            <IconButton onClick={() => addToFavs(tour)}>
            
              <AiFillHeart />
            </IconButton>
            {/* <Rating
            value={3}
            max={5}
            onChange={(value) => console.log(`Rated with value ${value}`)}
          /> */}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
