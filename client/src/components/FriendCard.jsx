import React, { useCallback, useEffect, useState } from "react";
import Data from "../assets/FriendData";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {
  getLogInUserDetails,
  getUserChannelDetail,
  getUserFollowingsDetail,
  getUserProfileDetail,
} from "../api";

const FriendCard = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [FollowersData, setFollowersData] = useState([]);

  const FollowersDataFetching = useCallback(() => {
    const logedInUserInfo = async () => await getLogInUserDetails();
    logedInUserInfo()
      .then(async (res) => await getUserFollowingsDetail(res.data.data._id))
      .then((res) => {
        const FollowedUsername = [];
        const FollowedTo = res.data.data.FollowedTo;
        FollowedTo.map(async (userId) => {
          // console.log(userId.followedId);
          const { data } = await getUserProfileDetail(userId.followedId);
          if (FollowedUsername.includes(data.data)) return null;
          return FollowedUsername.push(data.data);
          // setFollowersData(data.data);
        });
        setFollowersData(FollowedUsername);
        console.log(FollowersData);
      });
  }, [setFollowersData]);

  useEffect(() => {
    FollowersDataFetching();
  }, [setFollowersData, FollowersDataFetching]);

  // FollowersData.forEach((v) => {
  //   console.log(v.username);
  // });
  return (
    <div className="flex p-6 items-center flex-wrap gap-5 rounded shadow-xl">
      {FollowersData.map((friend) => (
        <div className="shadow-xl p-3">
          <Card
            key={friend.key}
            sx={{
              maxWidth: 345,
              boxShadow: "none",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={friend.coverImage}
                alt="background-img"
                sx={{ height: "12rem", objectFit: "fill", width: "20rem" }}
              />
              <Avatar
                src={friend.avatar}
                sx={{
                  marginTop: "-3rem",
                  marginLeft: "1rem",
                  width: "5rem",
                  height: "5rem",
                  border: "3px solid",
                  borderColor: "black",
                  backgroundColor: "#B4B4B8",
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {friend.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* {friend.role} */}
                </Typography>
              </CardContent>
            </CardActionArea>

            {/* {isFollowed ? (
            <div className="flex justify-center">
              <Button variant="contained" sx={{ marginLeft: "3rem" }}>
                Follow
              </Button>
            </div>
          ) : (
            <div>
              <Button variant="outlined">Unfollow</Button>
            </div>
          )} */}
          </Card>

          <div className="flex justify-center items-center">
            {isFollowed ? (
              <Button variant="contained">Follow</Button>
            ) : (
              <Button variant="outlined" sx={{ width: "10rem" }}>
                Following
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendCard;
