import React, { useEffect } from "react";
import Heading from "./sections/Heading.tsx";
import HackathonForm from "./sections/HackathonForm.tsx";

function CreateHackathon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Heading />
      <HackathonForm />
    </>
  );
}

export default CreateHackathon;
