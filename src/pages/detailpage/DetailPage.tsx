import React, { useEffect } from "react";
import HackathonDescription from "./sections/HackathonDescription.tsx";
import { useLocation } from "react-router-dom";

function DetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { id, hackathonName, hackathonStatus, imageURL, skill, description } =
    location.state;
  return (
    <>
      <HackathonDescription
        {...{
          id,
          hackathonName,
          hackathonStatus,
          imageURL,
          skill,
          description,
        }}
      />
    </>
  );
}

export default DetailPage;
