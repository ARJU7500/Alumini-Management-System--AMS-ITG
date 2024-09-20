import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const ProfileAvatar = (userDetails) => {
  // console.log(userDetails.userDetails);
  // const [profilePic, SetProfilePic] = useState();
  // useEffect(() => {
  //   try {
  //     axios
  //       .get("/api/v1/users/user-info", { withCredentials: true }) // by using withCredentials cookies are added.
  //       .then((res) => {
  //         // console.log(res.data.data);
  //         return res.data.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         // navlink(`/`);
  //       })
  //       .then((data) => {
  //         // console.log(data);
  //         SetProfilePic(data.avatar);
  //       });

  //   } catch (err) {
  //     return console.log(err);
  //   }
  // }, []);
  return (
    <>
      {/* {profilePic ? (
        <Avatar src={profilePic} alt="profile.jpg" />
      ) : (
        <Avatar src={profilePic} alt="Travis Howard" />
      )} */}

      {/* <img src={profilePic} alt="userpic.jpg" /> */}

      <Avatar src={userDetails.userDetails.avatar} alt="userpic.jpg" />
    </>
  );
};

export default ProfileAvatar;
