import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Navigation } from "./Navigation";
import { Grid, Hidden } from "@material-ui/core";
import { HeroMessage } from "./HeroMessage";
import HeroImage from "../utils/images/toursmx.jpeg";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    width: "auto",
    // paddingLeft: 80,
    // paddingRight: 80,
    color: '#FF0000',
    fontWeight: 600,
    fontSize: "5rem"     
  },
  fullHeight: {
    minHeight: "85vh",
  },
  heroImage: {
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundColor: "#fff",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",

    
    
  },
  
});

export const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation />
      <Grid container className={classes.fullHeight}>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          md={12}
          lg={6}
        >
          <HeroMessage 
            maintext="¡Disfruta de una aventura fuera de serie!"
            subtext="Tenemos las actividades mas populares"
            btntext="Mira nuestros tours"
          />
        </Grid>
        <Hidden mdDown>
          <Grid container item lg={6} className={classes.heroImage} />
        </Hidden>
      </Grid>
      
    </div>
  );
};
