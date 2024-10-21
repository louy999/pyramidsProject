"use client";
import React, { useEffect, useState } from "react";

import { formatDistanceToNow, parseISO } from "date-fns";
import axios from "axios";
import GetReplay from "../getAllReplay/getReplay";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MapRequest = ({ data, user }: any) => {
  const [name, setName] = useState("");
  const [replay, setReplay] = useState([]);
  const [showReq, setShowReq] = useState(false);
  const relativeTime = formatDistanceToNow(parseISO(data.date), {
    addSuffix: true,
  });
  const formattedReq = data.req
    .split("\n")
    .map((line: string, index: number) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  useEffect(() => {
    const userNameFetch = async () => {
      const res = await axios.get(
        `${process.env.LOCAL_API_URL}/users/${data.user_id}`
      );
      setName(res.data.data.name);
    };
    userNameFetch();

    const ReplayReqFetch = async () => {
      const res = await axios.get(
        `${process.env.LOCAL_API_URL}/replay/req/${data.id}`
      );
      setReplay(res.data.data);
    };

    ReplayReqFetch();
  }, [data]);

  return (
    <section className="my-5 relative" id={data.id}>
      <div className="w-full max-w-7xl px-1 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-10 gap-6 inline-flex">
          <div className="w-full flex-col justify-start items-start lg:gap-9 gap-6 flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full flex-col justify-start items-end gap-5 flex">
                <div
                  className={`w-full p-6 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-8 flex`}
                >
                  <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                    <div className="w-full justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-2.5 flex">
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                          <h5
                            className={`text-gray-900 text-sm font-semibold leading-snug`}
                          >
                            {user?.id === data.user_id ? "you" : name}
                          </h5>

                          <h6 className="text-gray-500 text-xs font-normal leading-5">
                            {relativeTime}
                          </h6>
                        </div>
                      </div>
                      <div className="text-gray-300 flex gap-4 flex-wrap md:flex-nowrap justify-end w-8 md:w-fit ">
                        {/* {cookies()?.get("id")?.value ===
                          props.data.user_id ? (
                            <>
                              <EditReq
                                id={props.data.id}
                                text={requestData.req}
                              />
                              <DeleteReq id={props.data.id} />
                            </>
                          ) : (
                            ""
                          )} */}
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm font-normal leading-snug">
                      {formattedReq}
                    </p>
                  </div>
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-4 flex">
                      <div className="justify-start items-center gap-1.5 flex">
                        <div
                          className={`flex items-center gap-1 cursor-pointer ${
                            replay.length === 0
                              ? "text-slate-400"
                              : "text-black"
                          }`}
                          onClick={() => setShowReq((prev) => !prev)}
                        >
                          <span className={``}>{replay.length}</span>
                          <div></div>
                          <h5 className="text-sm font-normal leading-snug">
                            Replies
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end flex-wrap">
        {showReq ? replay.map((d, i) => <GetReplay key={i} data={d} />) : ""}
      </div>
    </section>
  );
};

export default MapRequest;
