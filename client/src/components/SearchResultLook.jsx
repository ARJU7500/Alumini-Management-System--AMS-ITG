import { Avatar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const SearchResultLook = ({ result }) => {
  return (
    <div>
      <NavLink to="/home">
        <div className="flex flex-row p-2 gap-2 hover:bg-[#e3e3e3]">
          <Avatar alt={result.name} src="#" />
          <h1 className="ml-3">{result.name}</h1>
        </div>
      </NavLink>
    </div>
  );
};

export default SearchResultLook;
