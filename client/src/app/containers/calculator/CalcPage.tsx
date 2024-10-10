"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import defaultImg from "../../image/img.jpg";
import ProjectPage from "./projectPage";

// Define the shape of a project object
interface Project {
  img: string; // Assuming each project has an 'img' property
  // Add other properties if needed
  name: string; // Example property
}

const CalcPage = () => {
  const [projectSelect, setProjectSelect] = useState(""); // Stores the selected project name
  const [project, setProject] = useState<Project[]>([]); // Type project as an array of Project objects
  const [selectedImage, setSelectedImage] = useState(""); // Stores the selected image URL

  useEffect(() => {
    const projectFetch = async () => {
      const res = await axios.get(`${process.env.LOCAL_API_URL}/project`);
      setProject(res.data.data);
    };
    projectFetch();
  }, []);

  useEffect(() => {
    project.map((project) => {
      if (project.img === projectSelect) {
        setSelectedImage(`${process.env.LOCAL_API_IMG}/image/${project.img}`);
      } else {
        console.log("no");
      }
    });
  }, [project, projectSelect]);

  return (
    <>
      <div className="w-full flex justify-center items-center h-80">
        <Image
          src={selectedImage || defaultImg}
          alt="Project Image"
          width={600}
          height={800}
          className="rounded-md w-full h-full"
        />
      </div>
      <div className="w-full  lg:w-3/4 mt-2 flex flex-wrap justify-center gap-2 md:gap-5">
        <div className="w-full flex gap-5">
          <ProjectPage select={setProjectSelect} project={project} />
          <select className="w-2/4 rounded-md text-xl py-4 md:p-2 px-2 bg-black text-white">
            <option value="">type unit</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
          </select>
        </div>
        <div className="w-full flex gap-2 md:gap-5">
          <div className="w-2/4 flex flex-wrap">
            <input
              type="number"
              name=""
              placeholder="Down Payment"
              className="w-full p-2 text-black rounded-md"
              id=""
            />
            <label className="text-slate-400">hi</label>
          </div>

          <select className="w-2/4 p-2 text-black rounded-md text-[13px] h-fit">
            <option value="">percentage</option>
            <option value="city">8</option>
            <option value="city">9</option>
            <option value="city">10</option>
          </select>
        </div>
        <div className="w-full flex gap-2 md:gap-5">
          <select className="w-full text-xl py-4 md:p-2 px-2 bg-black text-white rounded-md">
            <option value="">delivery date</option>
            <option value="city">8</option>
            <option value="city">9</option>
            <option value="city">10</option>
          </select>
          <select className="w-full text-xl py-4 md:p-2 px-2 bg-black text-white rounded-md">
            <option value="">installment</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
          </select>
        </div>
        <div className="flex justify-center w-full">
          <input
            type="button"
            value="calc"
            className="bg-black text-white capitalize px-4  py-2 rounded-md shadow-md cursor-pointer w-5/12 mt-3"
          />
        </div>
      </div>
    </>
  );
};

export default CalcPage;
