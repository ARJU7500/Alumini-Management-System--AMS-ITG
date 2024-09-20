import {
  Divider,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { React, useEffect } from "react";
import EmojiEvents from "@mui/icons-material/EmojiEvents";
import { getLogInUserDetails } from "../api/index.js";
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LeftSideBar = () => {
  // const [selectedIndex, setSelectedIndex] = React.useState(1);
  const navlink = useNavigate();
  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };
  const [username, setUsername] = useState([]);
  // const [email, setEmail] = useState([]);
  // const [fullName, setFullName] = useState([]);
  // const [education, setEducation] = useState([]);
  // const [skill, setSkill] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [coverImage, setCoverImage] = useState([]);
  const [bio, setBio] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("/api/v1/users/user-info", { withCredentials: true }) // by using withCredentials cookies are added.
        .then((res) => {
          // console.log(res.data.data);
          return res.data.data;
        })
        .catch((error) => {
          console.log(error);
          navlink(`/`);
        })
        .then((data) => {
          // console.log(username);
          return (
            setUsername(data.username),
            setAvatar(data.avatar),
            setCoverImage(data.coverImage)
          );
          // setCoverImage(data.coverImage)
        });
    } catch (err) {
      return console.log(err);
    }
  }, []);

  return (
    <div className="flex flex-col bg-white rounded">
      <div className="flex flex-col justify-center items-center rounded">
        {coverImage ? (
          <img
            src={coverImage}
            alt="background-img"
            className="z-0 rounded-t-lg w-96 h-28"
          />
        ) : (
          <img
            src="Simple Shiny.svg"
            alt="background-img"
            className="z-0 rounded-t-lg w-96 h-28"
          />
        )}
        {/* <img
          src="banner.jpg"
          alt="background-img"
          className="z-0 rounded-t-lg w-96 h-28"
        /> */}
        {avatar ? (
          <img
            src={avatar}
            alt="profile"
            className=" z-10 rounded-[50%] w-20 h-20 border-4 mt-[-3rem] aspect-square"
          />
        ) : (
          <img
            src="/people.svg"
            alt="profile"
            className=" z-10 rounded-[50%] bg-white w-20 h-20 border-4 mt-[-3rem] aspect-square"
          />
        )}
      </div>
      <div className="flex justify-center item-center px-3 pb-4">
        <h1 className="font-black text-xl">{username}</h1>
      </div>
      <div className="flex justify-center item-center px-3 pb-4">
        <p>{bio}</p>
      </div>
      <Divider />
      <div>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List component="nav" aria-label="main mailbox folders">
            {/* <ListItemButton
            // selected={selectedIndex === 0}
            // onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton> */}
            {/* <ListItemButton
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton> */}
            <ListItemButton
            // selected={selectedIndex === 2}
            //</List>onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <BookmarkAddedIcon />
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItemButton>
            <NavLink to="/event">
              <ListItemButton
              // selected={selectedIndex === 3}
              // onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemIcon>
                  <EmojiEventsIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
              </ListItemButton>
            </NavLink>
          </List>
        </Box>
      </div>
    </div>
  );
};

export default LeftSideBar;
