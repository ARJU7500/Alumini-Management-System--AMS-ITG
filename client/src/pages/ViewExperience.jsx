import { useState } from "react";
import Data from "../assets/ProfileData";
import { NavLink } from "react-router-dom";
import { Button, Divider, IconButton, experimental_sx } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const ViewEducation = () => {
  const [image, setImage] = useState("");
  return (
    <div className="ml-[10rem] mt-12 w-[78%]">
      <div className="ml-3 mt-2 flex flex-row justify-between pb-6">
        <div className="mt-1">
          <NavLink to="/profile">
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
        <div className="text-3xl">Experience</div>
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
      {Data.map((exp) => (
        <div key={exp.id} className="mt-5">
          <div className="lg:ml-8 w-[94%] ml-4 grid grid-flow-col pb-6 grid-cols-10">
            <div className="">
              {image ? (
                <img
                  src={experimental_sx.utu}
                  alt="logo"
                  className="w-14 h-14 rounded-full"
                ></img>
              ) : (
                <img
                  src={exp.sampleEImg}
                  alt="logo"
                  className="w-14 h-14 rounded-full"
                ></img>
              )}
            </div>

            <div className="ml-3 col-span-4">
              <div className="text-lg">{exp.Experience}</div>
              <div className="text-sm flex flex-row">
                {exp.CompanyName}
                <div className="bg-[#a3a3a3] h-1 w-1 rounded-full m-2"></div>
                {exp.Role}
              </div>
              <div className="text-sm text-gray-400">
                {exp.started} - {exp.Endedin}
              </div>
              <div className="text-sm text-gray-400">
                {exp.state}, {exp.country}
              </div>
            </div>
            <div className="justify-center items-center col-start-10 col-end-11 w-10">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>

          <Divider
            sx={{
              width: "94%",
              marginLeft: "2rem",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ViewEducation;
