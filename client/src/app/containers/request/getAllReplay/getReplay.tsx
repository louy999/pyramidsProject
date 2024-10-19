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
                              class="w-8 h-8 p-[0.1rem] rounded-full ring-2 ring-black "
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
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-4 flex">
                      <div className="justify-start items-center gap-1.5 flex">
                        <div
                          className="flex items-center gap-1 cursor-pointer"
                          onClick={() => setShowReq((prev) => !prev)}
                        >
                          <span className="text-black"></span>
                          <a href="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M7.04962 9.99504L7 10M12 10L11.9504 10.005M17 10L16.9504 10.005M10.5 3H13.5C16.7875 3 18.4312 3 19.5376 3.90796C19.7401 4.07418 19.9258 4.25989 20.092 4.46243C21 5.56878 21 7.21252 21 10.5V12.4777C21 13.8941 21 14.6023 20.8226 15.1779C20.4329 16.4427 19.4427 17.4329 18.1779 17.8226C17.6023 18 16.8941 18 15.4777 18C15.0811 18 14.8828 18 14.6985 18.0349C14.2966 18.1109 13.9277 18.3083 13.6415 18.6005C13.5103 18.7345 13.4003 18.8995 13.1803 19.2295L13.1116 19.3326C12.779 19.8316 12.6126 20.081 12.409 20.198C12.1334 20.3564 11.7988 20.3743 11.5079 20.2462C11.2929 20.1515 11.101 19.9212 10.7171 19.4605L10.2896 18.9475C10.1037 18.7244 10.0108 18.6129 9.90791 18.5195C9.61025 18.2492 9.23801 18.0748 8.83977 18.0192C8.70218 18 8.55699 18 8.26662 18C7.08889 18 6.50002 18 6.01542 17.8769C4.59398 17.5159 3.48406 16.406 3.12307 14.9846C3 14.5 3 13.9111 3 12.7334V10.5C3 7.21252 3 5.56878 3.90796 4.46243C4.07418 4.25989 4.25989 4.07418 4.46243 3.90796C5.56878 3 7.21252 3 10.5 3Z"
                                stroke="black"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </a>
                          <h5 className="text-gray-900 text-sm font-normal leading-snug">
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
    </section>
  );
};

export default GetReplay;
