import React, { useState } from "react";
import { Grid, makeStyles, Button, Typography } from "@material-ui/core";
import { ShoppingFilterBy } from "./ShoppingFilterBy";
import { categories } from "../apis/categories";
import { useProducts } from "../contexts/ResultsContext";

export const useStyles = makeStyles({
  root: {
    borderBottom: "1px dotted",
  },
  text: {
    paddingBottom: "0.8rem",
  },
  optionButton: {
    marginTop: "1rem",
    marginLeft: "1rem",
    width: "fit-content",
  },
  filters: {
    marginTop: "1rem",
    marginLeft: "1rem",
    width: "fit-content",
    color: "grey",
  },
});

const priceRanges = [
  {
    options: [
      { startPrice: "500", endPrice: "1,499" },
      { startPrice: "1,500", endPrice: "3,000" },
    ],
  },
  {
    options: [...categories],
  },
];

export const ResultsShoppingOptions = () => {
  const { dispatch } = useProducts();
  const [choosenPrice, setChoosenPrice] = useState(null);
  const [choosenCat, setChoosenCat] = useState(null);

  const classes = useStyles();

  const priceOptionHandle = async (a, b) => {
    dispatch({ type: "FILTER_BY_PRICE", prices: { a, b } });
    setChoosenPrice({ a, b });
  };

  const categoryOptionHandle = (cat) => {
    dispatch({ type: "FILTER_BY_CATEGORY", cat });
    setChoosenCat(cat);
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    setChoosenPrice(null);
    setChoosenCat(null);
  };

  return (
    <Grid container item xs={12} md={6} direction="column" spacing={2}>
      <Grid item xs={12} container>
        <ShoppingFilterBy filteroption="Precio" />
        {priceRanges[0].options.map((op, i) => {
          return (
            <Button
              key={i}
              className={classes.optionButton}
              size="small"
              onClick={() => priceOptionHandle(op.startPrice, op.endPrice)}
            >
              {`$${op.startPrice} - $${op.endPrice}`}
            </Button>
          );
        })}
      </Grid>
      <Grid container item xs={12}>
        <ShoppingFilterBy filteroption="Categorias" />
        {priceRanges[1].options.map((cat, i) => {
          return (
            <Button
              key={i}
              className={classes.optionButton}
              size="small"
              onClick={() => categoryOptionHandle(cat)}
            >
              {cat}
            </Button>
          );
        })}
      </Grid>
      <Grid container item xs={12}>
        {choosenPrice || choosenCat ? (
          <ShoppingFilterBy filteroption="Filtros" />
        ) : (
          ""
        )}
        {choosenPrice && (
          <Typography
            variant="body1"
            className={classes.filters}
          >{`$${choosenPrice.a} - $${choosenPrice.b}`}</Typography>
        )}
        {choosenCat && (
          <Typography variant="body2" className={classes.filters}>
            {choosenCat}
          </Typography>
        )}
        {choosenCat || choosenPrice ? (
          <Button
            className={classes.optionButton}
            color="primary"
            variant="contained"
            onClick={clearFilters}
          >
            Remove Filters
          </Button>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};
