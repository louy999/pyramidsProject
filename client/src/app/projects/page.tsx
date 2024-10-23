import React from "react";
import CardsProjects from "../containers/projects/cards";
import BackgroundLogin from "../containers/login/background";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <BackgroundLogin />
      <CardsProjects />
    </div>
  );
};

export default page;
