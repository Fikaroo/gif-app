import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="flex items-center py-4">
      <h1 className="text-6xl text-transparent bg-clip-text font-black bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400">
        Giffu
      </h1>
      <Search />
    </div>
  );
};

export default Header;
