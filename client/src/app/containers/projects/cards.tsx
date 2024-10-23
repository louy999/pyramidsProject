import React from "react";
import TypeLinkWrapperProject from "./typeLinkProject";
import ProjectFetch from "./projectFetch";

const CardsProjects = () => {
  return (
    <div className="absolute left-2/4 top-1/4 -translate-x-2/4 w-screen md:w-3/4 bg-white bg-opacity-50 p-4 px-2 md:p-4 ">
      <TypeLinkWrapperProject />
      <ProjectFetch />
    </div>
  );
};

export default CardsProjects;
