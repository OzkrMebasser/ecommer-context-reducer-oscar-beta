import React from "react";
import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import { ResultCard } from "./ResultCard";
import { useHistory } from "react-router-dom";
import { marginer } from "../actions/marginer";
import { ImHeartBroken } from "react-icons/im";
import { useFavoriteTours } from "../contexts/FavoritesContext";

export const FavoriteTours = () => {
  const history = useHistory();
  const { dispatchFavs, favprods } = useFavoriteTours();

  const showSingleTour = (pr, e) => {
    if (
      e.target.classList.contains("MuiCardMedia-root") ||
      (e.target.classList.contains("MuiTypography-root") &&
        !e.target.classList.contains("MuiCardActions-root"))
    ) {
      history.push({
        pathname: `/tours/tour/${pr.title}`,
        state: {
          pr,
        },
      });
    }
  };

  return (
    <Container style={marginer("8rem")}>
      <Grid container spacing={3}>
        {favprods && favprods.length ? (
          favprods.map((pr, i) => {
            const { title, image, id, price } = pr;
            return (
              <Grid item xs={12} md={6} lg={4} key={id}>
                <ResultCard
                  onClick={(e) => showSingleTour(pr, e)}
                  key={id}
                  tourid={id}
                  tourimg={image}
                  tourtitle={title}
                  tourprice={price.toFixed(2)}
                  tour={pr}
                >
                  <IconButton
                    onClick={() =>
                      dispatchFavs({ type: "REMOVE_FROM_FAVORITES", pr })
                    }
                  >
                    <ImHeartBroken />
                  </IconButton>
                </ResultCard>
              </Grid>
            );
          })
        ) : (
          <Grid container item>
            <Typography textalign="center" variant="h3">
            Aún no tienes favoritos en tu lista ...
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
