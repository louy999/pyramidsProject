"use client";
import React from "react";
import TypeLink from "../home/TypeLink";
import CardOffer from "./CardOffer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
interface Offer {
  id: number;
  project_name: string;
  type: string;
  unit_space: number;
  img: string;
  down_payment: string;
  retuning: string;
}
const Offers = () => {
  const searchParams = useSearchParams();
  const [allOffers, setAllOffers] = useState<Offer[]>([]);
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>([]);

  useEffect(() => {
    const fetchAllOffers = async () => {
      try {
        const res = await axios.get(`${process.env.LOCAL_API_URL}/offer`);
        setAllOffers(res.data.data);
        setFilteredOffers(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllOffers();
  }, []);

  const search = searchParams.get("type");

  useEffect(() => {
    if (search !== null) {
      const filtered = allOffers.filter((offer) =>
        offer.type.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredOffers(filtered);
    } else {
      setFilteredOffers(allOffers);
    }
  }, [search, allOffers]);
  return (
    <div className="absolute top-2/4 lg:top-[70%] h-screen w-full md:w-3/4 bg-color1 bg-opacity-30 md:bg-opacity-15 md:left-2/4 md:-translate-x-2/4 rounded-md py-4 px-2">
      <TypeLink />
      <div className="flex justify-center flex-wrap gap-5 p-5">
        {filteredOffers.length > 0 ? (
          filteredOffers.map((o, i) => <CardOffer key={i} offer={o} />)
        ) : (
          <p>No offers found for this type.</p>
        )}
      </div>
    </div>
  );
};

export default Offers;
