import React, { useState } from "react";
import { Grid, Typography, FormControl, Select } from "@material-ui/core";
import { useProducts } from "../contexts/ResultsContext";

export const ResultsTopSection = () => {
  const { state, dispatch } = useProducts();
  const [sortBy, setSortBy] = useState("");

  const handleChange = async (event) => {
    await setSortBy(event.target.value);
    await dispatch({ type: event.target.value });
  };

  return (
    <Grid
      container
      item
      justifyContent="space-between"
      alignItems="center"
      style={{ marginTop: "4rem" }}
    >
      <Grid item container xs={6}>
        <Typography variant="h5">
          {state.products.length === 0
            ? "Lo sentimos, pero no hemos podido encontrar ningún producto que coincida con sus criterios de búsqueda"
            : `LOS ${state.products.length} MEJORES TOURS`}
        </Typography>
      </Grid>
      <Grid item container xs={6} justifyContent="flex-end">
        <Typography variant="body1" style={{ marginRight: "0.8rem" }}>
        Ordenar por
        </Typography>
        <FormControl>
          <Select
            native
            value={sortBy}
            onChange={handleChange}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"PRICE_LOW_HIGH"}>Precio Min-Max</option>
            <option value={"PRICE_HIGH_LOW"}>Precio Max-Min</option>
            <option value={"NAME"}>Nombre</option>
            <option value={"FILTER_BY_CATEGORY"}>Categoria</option>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
