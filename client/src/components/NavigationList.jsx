import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import axios from "axios";

const handleClick = (e) => {
  e.preventDefault();
};

const NavigationList = () => {
  const [username, setUsername] = useState([]);

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
          // navlink(`/`);
        })
        .then((data) => {
          // console.log(data.username);
          setUsername(data.username);
        });
    } catch (err) {
      return console.log(err);
    }
  }, []);

  return (
    <>
      {/* <ul className="flex flex-row item-center gap-[4vw]">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Connections">Connections</NavLink>
        </li>
        <li>
          <NavLink to="/chat">Chat</NavLink>
        </li>
        <li>
          <NavLink to="/Notifications">Notifications</NavLink>
        </li>
        <li>
          <NavLink to="/Profile">Profile</NavLink>
        </li>
      </ul> */}
      <Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "4.5rem",
            backgroundColor: "white",
            overflow: "hidden",
          }}
        >
          <ListItem onClick={handleClick}>
            <NavLink to="/home">
              <ListItemButton>
                <ListItemIcon>
                  <lord-icon
                    src="https://cdn.lordicon.com/cnpvyndp.json"
                    trigger="morph"
                    state="morph-home-2"
                  ></lord-icon>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem onClick={handleClick}>
            <NavLink to="/connections">
              <ListItemButton>
                <ListItemIcon>
                  <lord-icon
                    src="https://cdn.lordicon.com/kkvxgpti.json"
                    trigger="morph"
                    state="morph-home-2"
                  ></lord-icon>
                </ListItemIcon>
                <ListItemText primary="Connections" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem onClick={handleClick}>
            <NavLink to="/chat">
              <ListItemButton>
                <ListItemIcon>
                  <lord-icon
                    src="https://cdn.lordicon.com/fdxqrdfe.json"
                    trigger="morph"
                    state="morph-home-2"
                  ></lord-icon>
                </ListItemIcon>
                <ListItemText primary="Chat" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem onClick={handleClick}>
            <NavLink to="/notifications">
              <ListItemButton>
                <ListItemIcon>
                  <lord-icon
                    src="https://cdn.lordicon.com/vspbqszr.json"
                    trigger="morph"
                    state="morph-home-2"
                  ></lord-icon>
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem onClick={handleClick}>
            <NavLink to={`/profile/${username}`}>
              <ListItemButton>
                <ListItemIcon>
                  <lord-icon
                    src="https://cdn.lordicon.com/kthelypq.json"
                    trigger="morph"
                    state="morph-home-2"
                  ></lord-icon>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default NavigationList;
