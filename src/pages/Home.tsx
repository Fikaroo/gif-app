import React from "react";
import TrendingGifs from "../components/TrendingGifs/TrendingGifs";
import Header from "../components/Header";
import Stickers from "../components/Stickers/Stickers";

const Home = () => {
  return (
    <div>
      <Header />
      <TrendingGifs />
      <Stickers />
    </div>
  );
};

export default Home;
