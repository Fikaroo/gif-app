import useGetData from "../../hooks/useGetData";
import { Apis } from "../../services/apis";
import { Datum } from "../../types";
import Loading from "../Loading";
import TrendingGif from "./TrendingGif";
import Slider from "react-slick";

const TrendingGifs = () => {
  const { data, isLoading, isError } = useGetData({
    name: "trendingGifs",
    api: Apis.getDataGifs,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
  };
  return isLoading ? (
    <Loading />
  ) : isError ? (
    <div>Error</div>
  ) : (
    <div className="w-full  overflow-hidden py-12">
      <div className="flex gap-2 items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 stroke-sky-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
        </span>
        <h2 className="text-2xl">Trending GIFs</h2>
      </div>
      <div className="relative">
        <div className="absolute z-20 bg-gradient-to-r from-black/90 to-transparent left-0 w-16 h-full "></div>
        <div className="absolute z-20 bg-gradient-to-r to-black/90 from-transparent right-0 w-16 h-full "></div>
        <div className=" sm:block hidden">
          <Slider className="my-4 relative h-64" {...settings}>
            {data?.data.map(({ ...datum }: Datum, idx) => (
              <TrendingGif key={idx} {...datum} />
            ))}
          </Slider>
        </div>
        <div className="sm:hidden flex flex-wrap justify-around gap-4">
          {data?.data.map(({ ...datum }: Datum, idx) => (
            <TrendingGif key={idx} {...datum} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingGifs;
