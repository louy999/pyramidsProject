/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
const CardOfferProject = (props: any) => {
  return (
    <>
      {props?.offer?.map((o: any, i: any) => (
        <div key={i} className="">
          <div className="w-80  border rounded-lg shadow bg-gray-800 border-color2">
            <Image
              className="rounded-t-lg mb-5"
              src={`${process.env.LOCAL_API_IMG}/image/${o.img}`}
              alt=""
              width={1000}
              height={1000}
            />
            <div className="o-5 relative flex justify-start flex-wrap ">
              <div className="type absolute right-2 bottom-36 mb-2 bg-gray-800 o-1 rounded-md capitalize ">
                {o.project_name}
              </div>
              <div className="flex w-full gap-2">
                <div className="border-2 border-black relative rounded-md o-1 w-2/4 flex ">
                  <span className=" text-[10px] absolute bottom-5 px-2 bg-gray-800 ">
                    Down Payment
                  </span>
                  <span className="w-full text-center ">{o.down_payment}</span>
                </div>
                <div className="border-2 border-black relative rounded-md o-1 w-2/4 flex ">
                  <span className=" text-[10px] absolute bottom-5 px-2 bg-gray-800 ">
                    Returning
                  </span>
                  <span className="w-full text-center">{o.retuning}</span>
                </div>
              </div>
              <div className="flex w-full gap-2 mt-5">
                <div className="border-2 border-black relative rounded-md o-1 w-2/4 flex ">
                  <span className=" text-[10px] absolute bottom-5 px-2 bg-gray-800 ">
                    Type
                  </span>
                  <span className="w-full text-center">{o.type}</span>
                </div>
                <div className="border-2 border-black relative rounded-md o-1 w-2/4 flex ">
                  <span className=" text-[10px] absolute bottom-5 px-2 bg-gray-800 ">
                    unit space
                  </span>
                  <span className="w-full text-center">{o.unit_space}M</span>
                </div>
              </div>
              <div className="border-2 border-black relative rounded-md o-1 mt-3 w-full gap-2 flex justify-between">
                <Link
                  href="/"
                  className="text-center text-color2  bg-color1 w-2/4 rounded-md flex justify-center gap-1 items-center hover:text-color1 hover:bg-color2 duration-300"
                >
                  Whatsapp
                  <FaWhatsapp />
                </Link>
                <Link
                  href="/"
                  className="text-center text-color1  bg-color2 w-2/4 rounded-md flex justify-center gap-1 items-center hover:text-color2 hover:bg-color1 duration-300"
                >
                  Call Me
                  <MdAddCall />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardOfferProject;
