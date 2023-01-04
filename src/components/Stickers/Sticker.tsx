import { Datum } from "../../types";
const Sticker = ({ images }: Datum) => {
  return (
    <div className={`bg-fuchsia-400 rounded-xl`}>
      <img className="rounded-xl h-64" src={images.fixed_height.url} alt="" />
    </div>
  );
};

export default Sticker;
