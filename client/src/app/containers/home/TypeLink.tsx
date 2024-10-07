"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

const TypeLink = () => {
  const searchParams = useSearchParams();

  const dataLink = [
    { name: "commercial", href: `?type=commercial` },
    { name: "admin", href: `?type=admin` },
    { name: "clinics", href: `?type=clinics` },
    { name: "apartment", href: `?type=apartment` },
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
            } hover:bg-color1 hover:text-color2 rounded-md hover:px-2`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TypeLinkWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TypeLink />
    </Suspense>
  );
};

export default TypeLinkWrapper;
