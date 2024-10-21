import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import Image from "next/image";

import backImg from "../../../image/back.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GetReplay = ({ data }: any) => {
  console.log(data);
  const relativeTime = formatDistanceToNow(parseISO(data.date), {
    addSuffix: true,
  });
  const formattedReq = data.replay
    .split("\n")
    .map((line: string, index: number) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  return (
    <section className="my-4 relative w-11/12 left">
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
                            className={`text-gray-900 text-sm font-semibold leading-snug flex items-center gap-2 justify-start`}
                          >
                            {/* {user?.id === data.user_id ? "you" : name} */}
                            <Image
                              className="w-8 h-8 p-[0.1rem] rounded-full ring-2 ring-black "
                              src={backImg}
                              width={200}
                              height={200}
                              alt="Bordered avatar"
                            />
                            <div>
                              <div>Pyramids Development</div>
                              <h6 className="text-gray-500 text-xs font-normal leading-5">
                                {relativeTime}
                              </h6>
                            </div>
                          </h5>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetReplay;
