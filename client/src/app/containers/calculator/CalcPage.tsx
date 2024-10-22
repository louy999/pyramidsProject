"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import defaultImg from "../../image/img.jpg";
import ProjectPage from "./projectPage";
import ProjectType from "./projectType";
import DownPaymentProject from "./downPaymentProject";
import CalcButton from "./calcButton";
type Project = {
  img: string;
  name: string;
  delivery: string[];
  installment: string[];
};

const CalcPage = () => {
  const [project, setProject] = useState<Project[]>([]); // Stores all projects
  const [selectedImage, setSelectedImage] = useState(""); // Stores the selected image URL
  const [projectSelect, setProjectSelect] = useState(""); // Stores the selected project name
  const [projectType, setProjectType] = useState(""); // Stores the selected project name
  const [downPayment, setDownPayment] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [unitSpace, setUnitSpace] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [installment, setInstallment] = useState("");
  const [findSelectProject, setFindSelectProject] = useState<Partial<Project>>(
    {}
  );

  useEffect(() => {
    const projectFetch = async () => {
      const res = await axios.get(`${process.env.LOCAL_API_URL}/project`);
      setProject(res.data.data);
    };
    projectFetch();
  }, []);

  useEffect(() => {
    project.forEach((proj) => {
      if (proj.img === projectSelect) {
        setSelectedImage(`${process.env.LOCAL_API_IMG}/image/${proj.img}`);
        setFindSelectProject(proj);
      }
    });
  }, [project, projectSelect]);

  return (
    <>
      <div className=" flex justify-center items-center w-fit h-90">
        <Image
          src={selectedImage || defaultImg}
          alt="Project Image"
          width={600}
          height={300}
          className="rounded-md"
        />
      </div>
      <div className="w-full mt-2 flex flex-wrap justify-center gap-2">
        <div className="w-full flex gap-5 flex-wrap md:flex-nowrap">
          <ProjectPage select={setProjectSelect} project={project} />
          <ProjectType
            select={projectSelect}
            project={project}
            typeSelect={setProjectType}
          />
        </div>
        <DownPaymentProject
          downPayment={setDownPayment}
          sPercentage={setPercentage}
          percentage={percentage}
          unitSpace={setUnitSpace}
          projectType={projectType}
          find={findSelectProject}
        />

        <div className="w-full flex gap-2 md:gap-5">
          <select
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            className="w-full text-xl py-4 md:p-2 px-2 bg-black text-white rounded-md"
          >
            <option value="">delivery date</option>
            {findSelectProject?.delivery?.map((d, i) => (
              <option value={d} key={i}>
                {d} year
              </option>
            ))}
          </select>

          <select
            value={installment}
            onChange={(e) => setInstallment(e.target.value)}
            className="w-full text-xl py-4 md:p-2 px-2 bg-black text-white rounded-md"
          >
            <option value="">installment</option>
            {findSelectProject?.installment?.map((d, i) => (
              <option value={d} key={i}>
                {d} year
              </option>
            ))}
          </select>
        </div>
        <CalcButton
          name={findSelectProject.name}
          selectProject={projectSelect}
          find={findSelectProject}
          selectType={projectType}
          downPayment={downPayment}
          percentage={percentage}
          unitSpace={unitSpace}
          deliveryDate={deliveryDate}
          installment={installment}
        />
      </div>
    </>
  );
};

export default CalcPage;
