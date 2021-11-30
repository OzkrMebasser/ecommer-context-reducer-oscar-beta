import React from "react";
import { makeStyles, Button, Container, Typography } from "@material-ui/core";
import { CartHeading } from "./CartHeading";
import { CartProduct } from "./CartProduct";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 400,
    overflowY: "scroll",
  },
  buttonStyles: {
    width: "100%",
    borderRadius: "12",
    margin: "0.8rem 0",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",

  },
  emptyCartContainer: {
    minWidth: 350,
    maxWidth: 400,
    margin: "auto",
  },
});

export const Cart = () => {
  const classes = useStyles();
  const { cartItems, subTotal } = useCart();
  const b = cartItems.length === 0 ? false : true;

  switch (b) {
     case true:
      
      return (
        <Container className={classes.root}>
          <CartHeading totalprice={subTotal} itemsquantity={cartItems.length} />
          {cartItems.map((product, i) => {
            const { id, image, price, title, quantity, category } = product;
            return (
              <CartProduct
                key={id}
                productid={id}
                quantity={quantity}
                productprice={`$${price}`}
                producttitle={title}
                backgroundimg={image}
                productcat={category}
              />
            );
          })}
          {cartItems && cartItems.length ? (
           <Link to="/products" > <Button
              size="large"
              color="primary"
              variant="contained"
              className={classes.buttonStyles}
            >
             Agregar mas tours
            </Button></Link>
            
          ) : (
            ""
          )}  
        </Container>
      );
    case false:
      return (
        <Container className={classes.emptyCartContainer}>
          <Typography variant="subtitle2" align="center">
          Aún no has elegido ningún tour...
          </Typography>
        </Container>
      );
      
  }
};
