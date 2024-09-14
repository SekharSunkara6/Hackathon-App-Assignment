import React, { useEffect } from "react";
import MainImage from "./sections/MainImage.tsx";
import Achievements from "./sections/Achievements.tsx";
import Benefits from "./sections/Benefits.tsx";
import Explore from "./sections/Explore.tsx";
import Hackathons from "./sections/Hackathons.tsx";

function ListPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainImage />
      <Achievements />
      <Benefits />
      <Explore />
      <Hackathons />
    </>
  );
}

export default ListPage;
