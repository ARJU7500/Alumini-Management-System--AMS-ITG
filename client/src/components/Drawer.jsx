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
import React, { useState, useEffect, useRef } from "react";
import ProfileAvatar from "./ProfileAvatar";
import { Player } from "@lordicon/react";
import { NavLink } from "react-router-dom";
// import Home from "../../public/home new.json";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import axios from "axios";

defineElement(lottie.loadAnimation);

const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [username, setUsername] = useState([]);
  const [data, setData] = useState([]);
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
          setData(data);
          setUsername(data.username);
        });
    } catch (err) {
      return console.log(err);
    }
  }, []);

  const drawerSize = 10;

  const handleClick = (e) => {
    e.preventDefault();
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
    >
      <List>
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
  );

  return (
    <div>
      <button onClick={() => setDrawerOpen(true)}>
        <ProfileAvatar userDetails={data} />
      </button>

      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        swipeAreaWidth={drawerSize}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
