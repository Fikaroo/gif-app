import { Datum } from "../../types";

const TrendingGif = ({ images, user }: Datum) => {
  return (
    <div className="max-w-max mr-2 cursor-pointer object-cover group relative">
      <img className="rounded-xl h-64" src={images.fixed_height.url} alt="" />
      <img
        className="absolute left-5 bottom-5 w-0 group-hover:w-16 transition-all rounded-full"
        src={user?.avatar_url}
        alt=""
      />
    </div>
  );
};

export default TrendingGif;
