import React from "react";

const Search = () => {
  return (
    <div className="max-w-sm w-full mx-auto text-gray-900 rounded-full h-full relative">
      <input
        type="text"
        className="w-full p-3 focus:outline-none rounded-full h-full"
        placeholder="Search all the GIFs and Stickers"
      />
      <span className="absolute right-0.5 top-0.5 bg-sky-400 stroke-white rounded-full p-2 cursor-pointer hover:bg-sky-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
    </div>
  );
};

export default Search;
