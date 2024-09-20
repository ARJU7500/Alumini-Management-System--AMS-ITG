import React, { useState, useEffect } from "react";
import Data from "../assets/ProfileData";
import { NavLink, useLocation } from "react-router-dom";
import { Avatar, Button, Divider, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const formatter = buildFormatter(frenchStrings);

const ViewPost = () => {
  const [image, setImage] = useState("");
  const { state } = useLocation();

  return (
    <div className="ml-[10rem] mt-12 w-[78%]">
      <div className="ml-3 mt-2 flex flex-row justify-between pb-6">
        <div className="mt-1">
          <NavLink to="/profile:username">
            <IconButton
              size="12"
              sx={{
                color: "#2ed68a",
                borderRadius: "45%",
                height: "2rem",
                width: "2rem",
                ":hover": {
                  backgroundColor: "#BBF7D0",
                },
              }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
          </NavLink>
        </div>
        <div className="text-3xl">Activity</div>
        <div className="mt-1">
          <IconButton
            size="12"
            sx={{
              color: "#2ed68a",
              borderRadius: "45%",
              height: "2rem",
              width: "2rem",
              ":hover": {
                backgroundColor: "#BBF7D0",
              },
            }}
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>
      {state.map((acti) => (
        <div
          key={acti.id}
          className="flex flex-col justify-center items-center"
        >
          <div className="post_conatiner w-[70%] shadow-md rounded-lg flex flex-col item-center justify-center bg-gray-100 mb-10">
            <div className="mt-6 ml-6 mb-5 rounded-md shadow-lg w-[94%] bg-white">
              <div className="mt-5 ml-4 mb-2 flex flex-row ">
                <Avatar
                  src={acti.avatar || ""}
                  sx={{ height: "3rem", width: "3rem" }}
                />
                <div className="ml-2 flex flex-col">
                  <h1 className="text-md font-bold">{acti.username}</h1>
                  {/* <p className="text-xs">{acti.createdAt}</p> */}
                  <p>
                    <TimeAgo
                      date={`${acti.createdAt}Z`}
                      formatter={formatter}
                    />
                  </p>
                </div>
                <div className="ml-[72%]">
                  <IconButton aria-label="more">
                    <MoreHorizIcon />
                  </IconButton>
                </div>
              </div>

              <div className="ml-6 mt-4 mb-4">
                <p className="mb-4 text-md">{acti.description}</p>
                <div className="h-[72vh] w-[48vw]">
                  <img
                    src={acti.postImg}
                    alt="post-image"
                    className="h-full w-full rounded-md object-contain"
                  ></img>
                </div>
                <div className="mt-2 ml-2 flex flex-row">
                  <ThumbUpIcon />
                  <h1 className="ml-2">{acti.likesCount}</h1>
                  <h1 className="ml-[80%]">{acti.commentsCount}comments</h1>
                </div>
              </div>
              <Divider sx={{ width: "94%", marginLeft: "1rem" }} />
              <div className="mt-4 ml-36 mb-2 mr-36 flex flex-row justify-between">
                <div>
                  <Button
                    sx={{ color: "black" }}
                    startIcon={<CommentIcon sx={{ color: "black" }} />}
                  >
                    Comments
                  </Button>
                </div>
                <div>
                  <Button
                    sx={{ color: "black" }}
                    startIcon={<SendIcon sx={{ color: "black" }} />}
                  >
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewPost;
