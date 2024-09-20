import React, { useState, useEffect } from "react";
import FriendCard from "../components/FriendCard";
import SearchFriend from "../components/SearchFriend";
import SearchResults from "../components/SearchResults";

const Connections = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="bg-[#e4e4e4] h-auto w-full flex justify-between items-start ">
      <div className=" bg-white m-4 rounded w-full h-auto">
        <SearchFriend setResults={setResults} />
        <SearchResults results={results} />
        <div className=" -z-10">
          <p className="ml-6 mt-6 text-3xl border-b-grey pb-2 border-b-2 w-[95%]">
            Recommended for You
          </p>
          <FriendCard />
        </div>
      </div>
    </div>
  );
};

export default Connections;
