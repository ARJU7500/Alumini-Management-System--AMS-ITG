import React, { useState, useEffect } from "react";
import TopProfile from "../components/TopProfile";
import Experience from "../components/Exprience";
import SeePost from "../components/SeePost";
import Skill from "../components/Skill";
import Education from "../components/Education";
import Achivement from "../components/Achivement";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  // const navlink = useNavigate();
  let { username } = useParams();
  // console.log(username);
  const [data, setData] = useState([null]);

  useEffect(() => {
    try {
      axios
        .get(`/api/v1/users/accounts/channel/${username}`, {
          withCredentials: true,
        })
        .then((res) => {
          // console.log(res.data.data);
          return res.data.data;
        })
        .then((data) => {
          // console.log(data);
          const resData = data;
          setData(resData);
        })
        .catch((err) => {
          console.log(err);
          // navlink("/");
        });
    } catch (err) {
      return console.log(err);
    }
  }, [username]);
  return (
    <div className="bg-[#e3e3e3] lg:w-full lg:flex lg:flex-col lg:gap-0 lg:max-h-screen md:w-full  md:gap-0 sm:w-full sm:flex-col sm:flex lg:pb-6 pb-6 md:pb-6 sm:pb-6 sm:gap-3">
      <div className="bg-[#e3e3e3]">
        <TopProfile userDetails={data} />
      </div>
      <div className="bg-[#e3e3e3]">
        <Achivement userDetails={data} />
      </div>
      <div className="bg-[#e3e3e3]">
        <SeePost userDetails={data} />
      </div>
      <div className="bg-[#e3e3e3]">
        <Skill />
      </div>
      <div className="bg-[#e3e3e3]">
        <Education userDetails={data} />
      </div>
      <div className="bg-[#e3e3e3]">
        <Experience userDetails={data} />
      </div>
    </div>
  );
};

export default Profile;
