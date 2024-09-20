import React, { useState, useEffect } from "react";
import Activity from "../assets/Activity";
import { Button, Divider } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const formatter = buildFormatter(frenchStrings);

const SeePost = (props) => {
  const { username } = useParams();
  // console.log(props.userDetails._id);
  const [userId, setUserId] = useState(props.userDetails._id);
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    setUserId(props.userDetails._id);
    try {
      axios
        .get(`/api/v1/users/accounts/channel/${username}`)
        .then((res) => {
          // return res.data.data;
          return axios.get(`/api/v1/posts/${res.data.data._id}`);
        })
        .then(async (data) => {
          // console.log(data.data.data);
          return setData(data.data.data);
        })
        .catch((err) => {
          return console.log(err);
          // navlink("/");
        });
      // await axios.get(`/api/v1/posts/${data._id}`).then(async (res) => {
      //   const pData = res.data.data;
      //   return await setPostData(pData);
      // });
    } catch (err) {
      return console.log(err);
    }
  }, []);
  return (
    <div className=" lg:ml-52 mt-4 lg:mt-4 lg:mr-0 lg:mb-0 sm:mr-2 sm:ml-2 md:mt-4 sm:mt-4 ml-2 mr-2 z-0 bg-white lg:w-[100%] rounded-3xl lg:max-w-[72rem] sm:max-w-screen-sm">
      <div className="lg:ml-8 pt-6 ml-5 text-3xl">Activity</div>
      {/* <div className="ml-8">{activity.followers} followers</div> */}
      <div className="lg:ml-[60rem] lg:mt-[-2rem] pb-4 ml-52 mt-[-3rem]">
        <Button
          variant="outlined"
          sx={{
            borderTopRightRadius: "1rem",
            borderTopLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            borderBottomLeftRadius: "1rem",
          }}
        >
          Create a Post
        </Button>
      </div>
      {data.slice(0, 1).map((activity) => (
        <div key={activity.id} className="">
          {/* {console.log(activity)} */}
          <div className="lg:ml-8 ml-3">
            <NavLink to="#">
              <div className="flex flex-row">
                <div className="font-bold pr-3">{activity.username}</div>
                posted this
                <div className="w-1 h-1 bg-black rounded-full m-3"></div>
                <div>
                  <TimeAgo
                    date={`${activity.createdAt}Z`}
                    formatter={formatter}
                  />
                </div>
              </div>
              <div className="flex flex-row rounded-xl border-grey-300 border-2 w-[96%]">
                <img
                  src={activity.postImg}
                  alt="postImg"
                  className="w-20 h-20 rounded-xl p-2 "
                />
                <div className="mt-1 ml-1">
                  {activity.postTitle}
                  <div>{activity.description}</div>
                </div>
              </div>
            </NavLink>
            <div className="flex justify-between w-[95%] lg:ml-2 mt-2">
              <div className=" ">
                <ThumbUpIcon fontSize="2" /> {activity.likesCount}
              </div>
              <div className="">{activity.commentsCount} comments</div>
            </div>
          </div>
        </div>
      ))}
      <NavLink to="/profile/activity" state={data}>
        <div className="border-t-2 mt-2 flex items-center justify-center">
          <Button
            variant="plain"
            sx={{
              width: "71.3rem",
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          >
            See all posts...
          </Button>
        </div>
      </NavLink>
    </div>
  );
};

export default SeePost;
