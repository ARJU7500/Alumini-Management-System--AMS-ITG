import React from "react";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";
import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";
import Data from "../assets/ProfileData";

const Notifications = () => {
  return (
    <div className="bg-[#e3e3e3] lg:w-full md:w-full  h-[100vh] flex flex-col item-center ">
      <div className="w-[98%] bg-white rounded lg:ml-4 ml-4 lg:mt-4 mt-4 lg:h-[95vh] h-[95vh]">
        <p className="text-3xl ml-6 mt-6 border-b-2 border-grey pb-2 w-[96%]">
          Notifications
        </p>
        {Data.map((notif) => (
          <div className="m-9 border-grey border-[1px] shadow-lg p-2 rounded flex hover:bg-[#e3e3e3]">
            <img
              src={notif.sampleEImg}
              className="rounded w-16 h-16 blur-[1px] border-[1px] border-black"
            ></img>
            <p className="ml-3 text-lg">{notif.notification}</p>
            <div className="lg:md:ml-[61rem] mt-3 sm:ml-0">
              <Dropdown>
                <MenuButton
                  slots={{ root: IconButton }}
                  sx={{
                    border: "none",
                    width: "1rem",
                    height: "1rem",
                    borderRadius: "50%",
                    ":hover": { backgroundColor: "#d6d6d6" },
                  }}
                  slotProps={{
                    root: { variant: "outlined", color: "neutral" },
                  }}
                >
                  <MoreVert />
                </MenuButton>
                <Menu>
                  <MenuItem>
                    <DeleteIcon />
                    Delete Notification
                  </MenuItem>
                  <MenuItem>
                    <BlockIcon />
                    Turn off Notification form this source.
                  </MenuItem>
                </Menu>
              </Dropdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
