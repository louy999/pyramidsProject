/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";

// Define Project type
interface Project {
  img: string;
  name: string;
  type: string[]; // Assuming 'type' is an array of strings
  // Add any other fields that you expect from your project
}

const ProjectType = (props: any) => {
  const [typeSelect, setTypeSelect] = useState<Project | null>(null); // Now it's Project or null

  useEffect(() => {
    const selectedProject = props.project.find(
      (project: Project) => project.img === props.select
    );
    if (selectedProject) {
      setTypeSelect(selectedProject);
    }
  }, [props.project, props.select]);

  return (
    <select
      className="w-full md:w-2/4 rounded-md text-xl py-4 md:p-2 px-2 bg-black text-white"
      onChange={(e) => {
        props.typeSelect(e.target.value);
      }}
    >
      <option value="">Unit Type</option>
      {typeSelect?.type?.map((type, index) => (
        <option value={type} key={index}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default ProjectType;
