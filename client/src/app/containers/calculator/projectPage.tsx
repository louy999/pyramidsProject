import React from "react";

// Define the shape of each project
interface Project {
  img: string;
  name: string;
}

// Define the shape of props for ProjectPage
interface ProjectPageProps {
  select: (value: string) => void; // Function to handle selection
  project: Project[]; // Array of projects
}

const ProjectPage: React.FC<ProjectPageProps> = (props) => {
  return (
    <select
      onChange={(e) => {
        props.select(e.target.value);
      }}
      className="w-full md:w-2/4 bg-black text-white rounded-md text-xl py-4 md:p-2 px-2"
    >
      <option value="">Project</option>
      {props.project.map((project, index) => (
        <option key={index} value={project.img}>
          {project.name}
        </option>
      ))}
    </select>
  );
};

export default ProjectPage;
