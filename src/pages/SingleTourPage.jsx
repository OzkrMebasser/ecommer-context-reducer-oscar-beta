import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { ResultsHeader } from "../components/ResultsHeader";
import { SingleTour } from "../components/SingleTour";
import { useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";


export const SingleTourPage = () => {
  const location = useLocation();
  const [tour] = useState(location.state.pr);

  return (
    <>
      <Navigation />
      <ResultsHeader maintext={tour.title} />
      <SingleTour
        tour={tour}
        tourimg={tour.image}
        tourtitle={tour.title}
        tourdesc={tour.description}
        tourprice={tour.price}
      />
      <Footer />
    </>
  );
};
