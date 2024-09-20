import React, { useEffect } from "react";
import { useState } from "react";
import Data from "../assets/ProfileData";
import { NavLink } from "react-router-dom";
import { TextField, Avatar, Button, Divider, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/es-short";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import axios from "axios";

const formatter = buildFormatter(frenchStrings);

const Comment = () => {
  const [data, setData] = useState();

  return (
    <div className="ml-[10rem] mt-12 w-[78%]">
      <div className="ml-3 mt-2 flex flex-row justify-center items-center pb-6">
        <div className="text-3xl">Comments</div>
      </div>

      <div className="shadow-md rounded-md">
        {Data.map((com) => (
          <div className="flex flex-row gap-4 ">
            <div className="w-[50%]  border-[1px] shadow-md  ">
              <div className="flex flex-row mt-4 ml-4">
                <Avatar
                  src={com.avatar || ""}
                  sx={{ height: "2rem", width: "2rem" }}
                />

                <div className="ml-2 text-md">{com.name}</div>
                <div class="ml-2 mt-3 w-1 h-1 bg-black rounded-full"></div>
                <TimeAgo date={`${com.createdAt}Z`} formatter={formatter} />
              </div>
              <div className="ml-4 mr-4 mb-4 mt-6 ">
                <img
                  src={com.sampleImg1}
                  alt="image"
                  className="object-contain"
                ></img>
              </div>
            </div>
            <div className="w-[50%] border-[1px] mr-4 mb-4 rounded-md shadow-md ">
              <h1 className="mt-4 ml-4 text-xl">COMMENTS</h1>
              <div className="border-[1px] m-4 min-h-[33rem] max-h-[32rem] rounded-md overflow-x-hidden overflow-y-scroll">
                <div className="m-4 flex flex-row">
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Comment"
                      variant="outlined"
                      sx={{
                        width: "28rem",
                      }}
                    />
                  </div>
                  <div className="mt-2 ml-2">
                    <IconButton>
                      <SendIcon />
                    </IconButton>
                  </div>
                </div>
                <div className="bg-gray-200 m-4 p-2 flex rounded-md flex-wrap flex-col max-w-[32rem]">
                  <div className=" flex flex-row">
                    <Avatar
                      src={com.avatar || ""}
                      sx={{ height: "1.3rem", width: "1.3rem" }}
                    />
                    <h1 className="ml-2 mt-[-3px]">{com.name}</h1>
                  </div>
                  <div className="ml-8 mt-2 mb-4">{com.para}</div>
                </div>
                <div></div>
                {/* <div className="ml-4 mt-[-1rem]">
                  <Button>Reply</Button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
