import React, { useState } from "react";
import { Background } from "./Components/Background/Background";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";

export const App = () => {
  const heroData = [
    { text1: "Explore", text2: "Makarska, Croatia"},
    { text1: "Savor", text2: "Pi Leh Bay, Thailand"},
    { text1: "Discover", text2: "Sarajevo, Bosnia"},
  ];
  
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData = {heroData[heroCount]}
        heroCount = {heroCount}
        setHeroCount={setHeroCount}
        playStatus = {playStatus}
      />
    </div>
  );
};

export default App;
