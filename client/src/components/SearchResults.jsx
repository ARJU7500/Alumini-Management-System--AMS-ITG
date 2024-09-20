import React from "react";
import SearchResultLook from "./SearchResultLook";

const SearchResults = ({ results }) => {
  return (
    <div>
      <div className="w-[96%] ml-6 mt-2 bg-white flex flex-col shadow-md rounded z-10 max-h-32 overflow-y-scroll">
        {results.map((result, id) => {
          return <SearchResultLook key={id} result={result} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
