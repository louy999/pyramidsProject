"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

const BarsNav = () => {
  const pathname = usePathname();

  const dataLink = [
    { name: "home", href: "/" },
    { name: "calculator", href: "/cal" },
    { name: "request", href: "/req" },
    { name: "project", href: "/projects" },
  ];
  return (
    <ul className="flex justify-center items-center gap-4 capitalize">
      {dataLink.map((link, index) => (
        <li
          key={index}
          className={`duration-300 text-[15px] md:text-base ${
            pathname === link.href ? "text-color1 text-xl px-2" : ""
          }
         hover:bg-color1 hover:text-color2 rounded-md hover:px-2  `}
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BarsNav;
