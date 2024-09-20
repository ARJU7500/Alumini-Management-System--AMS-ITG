import { CheckBox } from "@mui/icons-material";
import { FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, NavLink } from "react-router-dom";
import axios, { AxiosError } from "axios";

const SignUp = () => {
  const navlink = useNavigate();

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      ValidateEmail(email);
      try {
        await axios
          .post("/api/v1/users/register", {
            email,
            password,
            fullname,
            username,
            confirmPassword,
          })
          .then((res) => {
            // console.log(res.status)
            if (res.status === 201) {
              navlink("/");
              alert("You registered successfully.");
            }
          });
      } catch (err) {
        if (err.response.status === 409) {
          alert("Email and Username is already registered!");
        } else if (err.response.status === 404) {
          alert("All fields are required!");
        } else if (err.response.status === 400) {
          alert("password and confirm password is not same!");
        } else {
          alert("All fields are required!");
        }
      }
    } else {
      alert("password and confirm password is different");
    }
  }
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto ">
        <div className=" flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-green-200 rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start p-12 bg-no-repeat bg-cover bg-center bg-[url('/alumni.jpg')]">
            <h1 className=" lg:text-3xl mb-3 ">Welcome</h1>
            <div className="hidden lg:block">
              <p className="text-md">
                Our dear alumni's you are wholeheartedly welcomed to our website
                that is just one registration ahead.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 py-16 px-12">
            <h1 className="text-3xl mb-4">Register</h1>
            <p className="">
              Create your account. It's free and only takes a minute.
            </p>
            <form name="form1" action="#">
              <div className="grid grid-cols-2 gap-5 mt-2">
                <TextField
                  id="outlined-basic"
                  type="text"
                  label="Full Name"
                  variant="outlined"
                  color="success"
                  required
                  onChange={(e) => {
                    setfullname(e.target.value);
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    // borderStyle: "none",
                    // borderBlock: "0px",
                    // borderColor: "#2ED68A",
                    // width: "100%",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  type="text"
                  label="Username"
                  variant="outlined"
                  color="success"
                  required
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    // borderStyle: "none",
                    // borderBlock: "0px",
                    // borderColor: "#2ED68A",
                    // width: "100%",
                  }}
                />
              </div>
              <div className="mt-5">
                <TextField
                  id="outlined-basic"
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  color="success"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    // borderStyle: "none",
                    // borderBlock: "0px",
                    // borderColor: "#2ED68A",
                    width: "100%",
                  }}
                />
              </div>
              <div className="mt-5">
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  color="success"
                  required
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
              <div className="mt-5">
                <TextField
                  id="outlined-password-input"
                  label="Confirm Password"
                  type="password"
                  color="success"
                  required
                  autoComplete="current-password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    width: "100%",
                  }}
                />
              </div>
              <div className="mt-5">
                <FormControlLabel
                  control={<CheckBox />}
                  label="I accept the Terms of Use and Privacy Policy"
                />
              </div>
              <div className="mt-5">
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
                  Register
                </Button>
                <div className="flex justify-center items-center mt-3">
                  <p>Already have an account?</p>
                  <div>
                    <NavLink to="/">
                      <Button
                        variant="contained"
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
                        LogIn
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
