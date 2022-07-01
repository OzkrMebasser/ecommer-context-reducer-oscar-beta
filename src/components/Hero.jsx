import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Navigation } from "./Navigation";
import { Grid } from "@material-ui/core";
import { HeroMessage } from "./HeroMessage";
// import HeroImage from "../utils/images/toursmx.jpeg";

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
    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/ecommerce-proyecto-b850b.appspot.com/o/couple-snorkeling-reef.jpg?alt=media&token=52e5c00d-9844-4f8b-87bf-091f4401c021)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundRepeat: "repeat",
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
      <Grid container item lg={6} className={classes.heroImage} />
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
        {/* <Hidden mdDown> */}
        
        {/* </Hidden> */}
      </Grid>
      
    </div>
  );
};
