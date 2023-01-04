import useGetData from "../../hooks/useGetData";
import { Apis } from "../../services/apis";
import { Datum } from "../../types";
import Loading from "../Loading";
import Sticker from "./Sticker";

const Stickers = () => {
  const { data, isLoading, isError } = useGetData({
    name: "trendingStickers",
    api: Apis.getDataStickers,
  });
  console.log(data);
  return isLoading ? (
    <Loading />
  ) : isError ? (
    <div>Error</div>
  ) : (
    <div>
      <div className="flex gap-2 items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 stroke-purple-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
        </span>
        <h2 className="text-2xl">Trending Stickers</h2>
      </div>
      <div className="flex flex-wrap justify-around gap-4 py-4">
        {data?.data.map(({ ...datum }: Datum, idx) => (
          <Sticker key={idx} {...datum} />
        ))}
      </div>
    </div>
  );
};

export default Stickers;
