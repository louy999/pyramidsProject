"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

const TypeLinkProjects = () => {
  const searchParams = useSearchParams();

  const dataLink = [
    { name: "New Capital", href: `?type=NewCapital`, status: true },
    { name: "El Galala", href: `?type=ElGalala`, status: true },
    { name: "New Cairo", href: `?type=NewCairo`, status: false },
    { name: "October", href: `?type=October`, status: false },
  ];

  return (
    <div className={`w-full flex justify-center transition-all duration-300`}>
      <ul className="flex justify-center items-center gap-4 capitalize p-4 md:py-2 rounded-md shadow-md bg-white text-black">
        {dataLink.map((link, index) => (
          <li
            key={index}
            className={`duration-300 ${
              `?${searchParams}` === link.href
                ? "text-color1 text-2xl px-2"
                : ""
            }  rounded-md hover:px-2 ${
              link.status
                ? "cursor-pointer opacity-100 hover:bg-color1 hover:text-color2"
                : "cursor-none opacity-25"
            }`}
          >
            <Link href={link.status ? link.href : ""}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TypeLinkWrapperProject = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TypeLinkProjects />
    </Suspense>
  );
};

export default TypeLinkWrapperProject;
