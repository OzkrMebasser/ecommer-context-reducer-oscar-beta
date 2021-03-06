import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useCart } from "../contexts/CartContext";
import { checkIfInCart } from "../actions/checkIfInCart";

const useStyles = makeStyles({
  root: {
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    backgroundColor: '#fff',
    width: "380px",
    borderRadius: 16,
    marginLeft: 'auto',
    marginRight: "auto",
  

  },
  cardMedia: {
    height: "380px",
    backgroundColor: '#fff',
    backgroundSize: "cover",
    
  },
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  }
    
 
});

export const ResultCard = ({
  tourcat,
  tourimg,
  tourtitle,
  tourprice,
  tourid,
  onClick,
  tour,
  children,
}) => {
  const classes = useStyles();
  const { dispatch, cartItems } = useCart();

  const addToCart = (tour) => {
    dispatch({ type: "ADD_TO_CART", tour });
  };

  return (
    <Card onClick={onClick} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt="Los mejores tours de México"
          image={tourimg}
          title="Los mejores tours de México"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {tourtitle}
          </Typography>
          <Typography gutterBottom variant="body2">
            Categoria: {tourcat}
          </Typography>
          <Typography variant="h6" color="textSecondary">
           Precio:  ${tourprice}
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={() => addToCart(tour)}
          disabled={checkIfInCart(cartItems, tourid) ? true : false}
        >
          {checkIfInCart(cartItems, tourid) ? "EN CARRITO" : "AGREGAR AL CARRITO"}
        </Button>
        {children}
      </CardActions>
    </Card>
  );
};
