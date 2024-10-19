import AddRequest from "../containers/request/addReq/request";
import { headers } from "next/headers";
import GetRequest from "../containers/request/getReq/request";

const RequestPage = () => {
  const headersList = headers();
  const user = headersList.get("x-user");

  return (
    <div className="w-full lg:w-3/4  relative left-2/4 -translate-x-2/4 top-20  p-2 rounded-md">
      <AddRequest user={JSON.parse(user)} />
      <GetRequest />
    </div>
  );
};

export default RequestPage;
