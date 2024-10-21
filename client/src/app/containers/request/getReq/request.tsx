import React from "react";
import axios from "axios";
import MapRequest from "./mapRequest";
import { headers } from "next/headers";

interface RequestData {
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const GetRequest = async () => {
  const getRequestFetch = await axios.get(`${process.env.LOCAL_API_URL}/req`);
  const headersList = headers();
  const refererHeader = headersList.get("x-user");
  const referer = refererHeader ? JSON.parse(refererHeader) : null;

  return (
    <div>
      {getRequestFetch.data.data
        .sort(
          (a: RequestData, b: RequestData) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((req: RequestData, index: number) => (
          <MapRequest data={req} user={referer} key={index} />
        ))}
    </div>
  );
};

export default GetRequest;
