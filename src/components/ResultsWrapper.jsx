import React from "react";
import { Grid, Container } from "@material-ui/core";
import { ResultsShoppingOptions } from "./ResultsShoppingOptions";
import { ResultsTopSection } from "./ResultsTopSection";
import { ResultCard } from "./ResultCard";
import { useTours } from "../contexts/ResultsContext";
import { useHistory } from "react-router-dom";

export const ResultsWrapper = () => {
  const history = useHistory();
  const {
    state: { tours },
  } = useTours();

  const showSingleProduct = (pr, e) => {
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
    <Container style={{ marginTop: "4rem" }}>
      <Grid container justifyContent="space-between" spacing={3}>
        <ResultsShoppingOptions />
        <ResultsTopSection />
        <Grid container spacing={3} style={{ marginTop: "1rem" }}>
          {tours.length !== 0
            ? tours.map((pr, i) => {
                const { title, image, id, price, category } = pr;
                return (
                  <Grid item xs={12} md={6} lg={4} key={id}>
                    <ResultCard
                      onClick={(e) => showSingleProduct(pr, e)}
                      key={id}
                      tourid={id}
                      tourimg={image}
                      tourtitle={title}
                      tourprice={price.toFixed(2)}
                      tour={pr}
                      tourcat={category}
                    />
                  </Grid>
                );
              })
            : ""}
        </Grid>
      </Grid>
    </Container>
  );
};
