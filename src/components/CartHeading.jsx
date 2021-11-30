import React from "react";
import { Link } from "react-router-dom";

import { Grid, Typography, makeStyles, Button } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    paddingTop: "0.8rem",
    paddingBottom: "0.8rem",
    borderBottom: "1px solid #151515",
    
  },
  buttonStyles: {
    width: "100%",
    borderRadius: 16,
    margin: "0.8rem 0",
    boxShadow: "none",
    
  },
});

export const CartHeading = ({ totalprice, itemsquantity }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container item sm justifyContent="space-between">
      <Grid item>
        <Typography variant="subtitle2">
          {itemsquantity} Articulos en el carrito
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">Subtotal:</Typography>
        <Typography variant="h6">${totalprice}</Typography>
      </Grid>
      <Link to="/payment" variant="h6">
        <Button
        size="large"
        variant="contained"
        color="primary"
        className={classes.buttonStyles}
         >
           Proceder a la compra
         </Button>
        </Link>
    </Grid>
  );
};
