import axios from "axios";
import HandelRequestUser from "./handelRequestUser";

const AllRequest = async () => {
  try {
    const res = await axios.get(`${process.env.LOCAL_API_URL}/req`);
    const sortedRequests = res.data.data.sort(
      (a: { date: string }, b: { date: string }) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
      <div className="mt-5 bg-color2 p-4 rounded-md">
        <h2>{res.data.data.length} Comment</h2>
        <div>
          {sortedRequests.map((r: string[], a: number) => (
            <HandelRequestUser key={a} data={r} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default AllRequest;
