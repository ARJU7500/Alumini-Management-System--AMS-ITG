import { Input } from "@mui/joy";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

const friends = [
  {
    label: "John Doe",
  },
  {
    label: "Jane Smith",
  },
];

const SearchFriend = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="ml-6 mt-3">
      <Input
        sx={{ width: "98%" }}
        placeholder="Search friend"
        startDecorator={<SearchIcon />}
        endDecorator={<Button>Search</Button>}
        options={friends}
        onChange={(e) => handleChange(e.target.value.toLowerCase())}
      ></Input>
    </div>
  );
};

export default SearchFriend;
