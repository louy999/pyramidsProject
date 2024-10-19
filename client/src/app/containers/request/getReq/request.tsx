import React from "react";
import axios from "axios";
import MapRequest from "./mapRequest";
import { headers } from "next/headers";

const GetRequest = async () => {
  const getRequestFetch = await axios.get(`${process.env.LOCAL_API_URL}/req`);
  const headersList = headers();
  const referer = JSON.parse(headersList.get("x-user"));

  return (
    <div>
      {getRequestFetch.data.data
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((req, index) => (
          <MapRequest data={req} user={referer} key={index} />
        ))}
    </div>
  );
};

export default GetRequest;
