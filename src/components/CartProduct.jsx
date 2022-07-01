import React from "react";
import { Grid, Typography, makeStyles, IconButton } from "@material-ui/core";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "../contexts/CartContext";

export const useStyles = makeStyles({
  root: {
    paddingTop: "0.8rem",
    paddingBottom: "0.8rem",
    cursor: "pointer",
  },
  tourImage: {
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
});

export const CartProduct = ({
  backgroundimg,
  quantity,
  tourtitle,
  tourprice,
  tourid,
}) => {
  const classes = useStyles();

  const { dispatch } = useCart();
  return (
    <Grid className={classes.root} container justifyContent="space-between">
      <Grid
        item
        xs={3}
        className={classes.tourImage}
        style={{ backgroundImage: `url(${backgroundimg})` }}
      />
      <Grid container direction="column" item xs={8}>
        <Typography variant="body1">{tourtitle}</Typography>
        <Typography variant="subtitle2">{tourprice}</Typography>
        <Grid container item justifyContent="space-between" alignItems="center">
          <Grid container item xs>
            <Typography variant="body2">
              Cantidad:
              <IconButton
                onClick={() => dispatch({ type: "INCREMENT", tourid })}
              >
                <IoIosAdd />
              </IconButton>
              {quantity}
              <IconButton
                onClick={() => dispatch({ type: "DECREMENT", tourid })}
              >
                <IoIosRemove />
              </IconButton>
            </Typography>
          </Grid>
          <Grid container item xs={2} justifyContent="flex-end">
            <IconButton
              onClick={() => dispatch({ type: "REMOVE_FROM_CART", tourid })}
            >
              <AiFillDelete />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
