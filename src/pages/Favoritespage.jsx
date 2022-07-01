import React from "react";
import { Navigation } from "../components/Navigation";
import { ResultsHeader } from "../components/ResultsHeader";
import { Footer } from "../components/Footer";
import { FavoriteTours } from "../components/FavoriteTours";

export const Favoritespage = () => {
  return (
    <>
      <Navigation />
      <ResultsHeader maintext="TUS TOURS FAVORITOS" />
      <FavoriteTours />
      <Footer />
    </>
  );
};
