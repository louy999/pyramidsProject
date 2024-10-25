"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import CardOfferProject from "./CardOffer";
import ReactPlayer from "react-player";

// Define the structure of `data`
interface ProjectData {
  img: string;
  description: string;
}

const ProjectId = () => {
  const [data, setData] = useState<ProjectData | null>(null);
  const [dateProject, setDateProject] = useState([]);
  const pathname = usePathname();
  const id = pathname.slice(10);

  useEffect(() => {
    const getProject = async () => {
      const res = await axios.get(`${process.env.LOCAL_API_URL}/project/${id}`);
      setData(res.data.data);
    };
    const getOffer = async () => {
      const resOffer = await axios.get(
        `${process.env.LOCAL_API_URL}/offer/project/${id}`
      );
      setDateProject(resOffer.data.data);
    };
    getProject();
    getOffer();
  }, [id]);

  return (
    <div className="w-screen md:w-[80vw] relative top-16 left-2/4 -translate-x-2/4">
      {data && (
        <>
          <Image
            src={`${process.env.LOCAL_API_IMG}/image/${data.img}`}
            alt=""
            className="w-full h-[60vh] rounded-lg"
            width={1000}
            height={1000}
          />
          <div className="mt-10 w-full flex justify-center flex-wrap md:flex-nowrap">
            <div className="flex justify-between gap-5 rounded-lg p-3 w-full">
              <div className="bg-white text-black h-full p-3 rounded-md">
                {data.description}
              </div>
              <div>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=o1tXf9TIgZ4"
                  className="w-20"
                />
              </div>
            </div>
          </div>
        </>
      )}
      <div className="mt-10 overflow-x-auto flex gap-5">
        <CardOfferProject offer={dateProject} />
      </div>
    </div>
  );
};

export default ProjectId;
