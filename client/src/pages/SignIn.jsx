import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navlink = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function ValidateEmail(input) {
    var validRegex = "@";

    if (input.includes(validRegex)) {
      return true;
    } else {
      alert("Invalid email address '@' is missing!");
      document.form1.email.focus();
      return false;
    }
  }

  async function submit(e) {
    e.preventDefault();
    ValidateEmail(email);
    try {
      await axios
        .post(
          "/api/v1/users/login",
          { email, password },
          { withCredentials: true }
        ) // by using withCredentials cookies are added.
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            navlink(`/home`);
            alert("You LoggedIn successfully.");
          }
        });
    } catch (err) {
      if (err.response.status === 401) {
        alert("Your password is incorrect");
      } else if (err.response.status === 404) {
        alert("All fields are required!");
      } else if (err.response.status === 500) {
        alert("Something wents wrong in Server!");
      } else if (err.response.status === 400) {
        alert("Please provide a valid email address");
      }
    }
  }
  return (
    <div className="bg-black-100 min-h-screen flex items-center justify-center">
      {/* -----login-conatiner----- */}
      <div className="bg-green-200 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* -----login-form----- */}
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-5xl">Login</h2>
          <p className="mt-4 text-sm">Already a member. Login</p>

          <form className="flex flex-col gap-4">
            <div className="p-2 mt-4">
              <TextField
                id="outlined-basic"
                type="email"
                label="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                variant="outlined"
                color="success"
                sx={{
                  backgroundColor: "#fff",
                  // borderStyle: "none",
                  // borderBlock: "0px",
                  borderColor: "#2ED68A",
                  width: "100%",
                }}
              />
            </div>
            <div className="p-2">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                color="success"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
                sx={{
                  backgroundColor: "#fff",
                  width: "100%",
                }}
              />
            </div>
            <NavLink to="/home">
              <Button
                variant="contained"
                onClick={submit}
                sx={{
                  backgroundColor: "#2ED68A",
                  width: "95%",
                  // padding: "0.5rem",
                  marginLeft: "0.5rem",
                  ":hover": {
                    color: "white",
                    backgroundColor: "#1EBC7C",
                  },
                }}
              >
                Login
              </Button>
            </NavLink>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-grey-400">
            <hr className="border-black" />
            <p className="text-center ">OR</p>
            <hr className="border-black" />
          </div>

          <div className="pt-2 pb-2 flex justify-center ml-[-0.8rem] items-center">
            <Button
              variant="contained"
              startIcon={<GoogleIcon sx={{ color: "white" }} />}
              sx={{
                padding: "0.7rem",
                paddingLeft: "1.4rem",
                paddingRight: "1.4rem",
                backgroundColor: "#2ED68A",
                color: "#fff",
                borderStyle: "none",

                ":hover": {
                  backgroundColor: "#1EBC7C",
                  borderStyle: "none",
                },
              }}
            >
              Login with Google
            </Button>
          </div>

          <NavLink to={"#"}>
            <p className="text-sm border-b border-black flex py-4 justify-center">
              Forgot your password?
            </p>
          </NavLink>
          <div className="mt-3 ml-4 text-sm flex justify-between items-center">
            <p>Don't have an account?</p>
            <div className="py-2 px-5">
              <NavLink to="/signup">
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#2ed68a",
                    ":hover": {
                      backgroundColor: "#1EBC7C",
                    },
                  }}
                >
                  Register
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        {/* -----login-image----- */}
        <div className="w-1/2 md:block hidden">
          <img src="./login.png" className="rounded-2xl "></img>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
