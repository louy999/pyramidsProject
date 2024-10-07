"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
interface CardOfferProps {
  offer: {
    project_name: string;
    type: string;
    unit_space: number;
    img: string;
    down_payment: string;
    retuning: string;
  };
}
const CardOffer = (props: CardOfferProps) => {
  return (
    <div>
      <div className="max-w-sm  border rounded-lg shadow bg-gray-800 border-color2">
        <Link href="#">
          <Image
            className="rounded-t-lg"
            src={`${process.env.LOCAL_API_IMG}/image/${props.offer.img}`}
            alt=""
            width={1000}
            height={1000}
          />
        </Link>
        <div className="p-5 relative flex justify-start flex-wrap ">
          <div className="type absolute right-2 bottom-44 mb-2 bg-gray-800 p-1 rounded-md capitalize ">
            {props.offer.project_name}
          </div>
          <div className="flex w-full gap-2">
            <div className="border-2 border-black relative rounded-md p-1 w-2/4 flex ">
              <span className=" text-[10px] absolute bottom-6 px-2 bg-gray-800 ">
                Down Payment
              </span>
              <span className="w-full text-center ">
                {props.offer.down_payment}
              </span>
            </div>
            <div className="border-2 border-black relative rounded-md p-1 w-2/4 flex ">
              <span className=" text-[10px] absolute bottom-6 px-2 bg-gray-800 ">
                Returning
              </span>
              <span className="w-full text-center">{props.offer.retuning}</span>
            </div>
          </div>
          <div className="flex w-full gap-2 mt-5">
            <div className="border-2 border-black relative rounded-md p-1 w-2/4 flex ">
              <span className=" text-[10px] absolute bottom-6 px-2 bg-gray-800 ">
                Type
              </span>
              <span className="w-full text-center">{props.offer.type}</span>
            </div>
            <div className="border-2 border-black relative rounded-md p-1 w-2/4 flex ">
              <span className=" text-[10px] absolute bottom-6 px-2 bg-gray-800 ">
                unit space
              </span>
              <span className="w-full text-center">
                {props.offer.unit_space}M
              </span>
            </div>
          </div>
          <div className="border-2 border-black relative rounded-md p-1 mt-3 w-full gap-2 flex justify-between">
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
  );
};

export default CardOffer;
