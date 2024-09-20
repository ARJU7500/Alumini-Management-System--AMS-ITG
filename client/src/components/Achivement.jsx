import { React, useState } from "react";
import Data from "../assets/ProfileData";
import { Button, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { DividerRoot } from "@mui/joy/Divider/Divider";

const Achivement = () => {
  const [img, setImg] = useState(false);

  return (
    <div className=" lg:ml-52 mt-4 lg:mt-4 lg:mr-0 lg:mb-0 sm:mr-2 sm:ml-2 md:mt-4 sm:mt-4 ml-2 mr-2 z-0 bg-white lg:w-[100%] rounded-3xl lg:max-w-[72rem] sm:max-w-screen-sm">
      <div className="lg:ml-8 ml-5 pt-6 text-3xl">Achivement</div>
      <div className="lg:ml-[60rem] lg:mt-[-2.3rem] ml-56 mt-[-2.5rem] pb-2 ">
        <Button
          variant="outlined"
          sx={{
            borderTopRightRadius: "1rem",
            borderTopLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            borderBottomLeftRadius: "1rem",
          }}
        >
          Add Skill
        </Button>
      </div>
      {Data.slice(0, 2).map((achiv) => (
        <div key={achiv.id} className="mt-5">
          <div className="lg:ml-8 w-[94%] ml-4 flex flex-row pb-6">
            <img
              src={achiv.sampleImg1}
              alt="logo"
              className="w-14 h-14 rounded-full"
            ></img>
            <div className="ml-3">
              <div className="text-lg">{achiv.achivement}</div>
              <div className="text-sm">{achiv.para}</div>

              <div className="text-sm text-gray-400">
                {achiv.achivDateStart} - {achiv.achivDateEnd}
              </div>
            </div>
          </div>
          <Divider />
        </div>
      ))}
      <NavLink to="/profile/achivement">
        <div className=" mt-2 flex items-center justify-center">
          <Button
            variant="plain"
            sx={{
              width: "71.3rem",
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          >
            See all Achivements...
          </Button>
        </div>
      </NavLink>
    </div>
  );
};

export default Achivement;
