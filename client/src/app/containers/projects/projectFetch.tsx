/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
interface Project {
  id: number;
  distention: string;
  name: string;
  description: string;
  img: string;
}

const ProjectFetch = () => {
  const searchParams = useSearchParams();
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjectGet = async () => {
      const res = await axios.get(`${process.env.LOCAL_API_URL}/project`);
      setProjectData(res.data.data);
    };
    fetchProjectGet();
  }, []);
  const filteredData = projectData.filter((p: any) => {
    const typeParam = searchParams.get("type");
    if (typeParam && p.distention) {
      return p.distention.toLowerCase() === typeParam.toLowerCase();
    }
    return true; // No filter if "type" is not in the URL
  });

  return (
    <>
      {filteredData.map((p, i) => (
        <Link
          key={i}
          href={`/projects/${p.id}`}
          className="flex flex-col items-center bg-white  rounded-lg shadow lg:flex-row  hover:bg-gray-200 w-full lg:w-8/12 my-10 lg:relative lg:left-2/4 lg:-translate-x-2/4 "
        >
          <Image
            width={600}
            height={300}
            className="object-cover w-full lg:w-2/4 rounded-l-md "
            src={`${process.env.LOCAL_API_IMG}/image/${p.img}`}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h3 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 ">
              {p.name}
            </h3>
            <p className="mb-3 text-xl text-gray-700 line-clamp-3">
              {p.description}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProjectFetch;
