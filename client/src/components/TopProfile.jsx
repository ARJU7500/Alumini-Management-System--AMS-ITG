import React, { useEffect, useState } from "react";
import Data from "../assets/TopProfileData";
import {
  Avatar,
  Button,
  Modal,
  ModalDialog,
  DialogTitle,
  Divider,
  ModalClose,
  DialogContent,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";
import LinkIcon from "@mui/icons-material/Link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {
  Accordion,
  AccordionSummary,
  Autocomplete,
  IconButton,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Countries from "../assets/Countries";
import States from "../assets/States";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Camera from "./Camera";
import ProfileData from "../assets/ProfileData";

const TopProfile = (userChannelDetails) => {
  // console.log(userChannelDetails.userDetails);
  const userChannelData = userChannelDetails.userDetails;
  // const [background, setBackground] = useState(false);
  const [profilePic, setProfilePic] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  useEffect(() => {
    // Fetch countries from API
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data.data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    if (country) {
      // Fetch states based on selected country
      fetch(`https://countriesnow.space/api/v0.1/countries/states/${country}`)
        .then((response) => response.json())
        .then((data) => setStates(data.data))
        .catch((error) => console.error("Error fetching states:", error));
    }
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    if (state) {
      // Fetch cities based on selected state
      fetch(
        `https://countriesnow.space/api/v0.1/countries/states/cities/${selectedCountry}/${state}`
      )
        .then((response) => response.json())
        .then((data) => setCities(data.data))
        .catch((error) => console.error("Error fetching cities:", error));
    }
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const selectCountries = {
    options: Countries,
    getOptionLabel: (option) => option.name,
  };
  const selectStates = {
    options: States,
    getOptionLabel: (option) => option.name,
  };
  // console.log(Data);
  return (
    <div className="">
      {Data.map((profile) => (
        <div
          key={profile.id}
          className="lg:ml-52 mt-4 lg:mt-4 lg:mr-0 lg:mb-0 sm:mr-2 sm:mb-2 sm:ml-2 md:mt-4 sm:mt-4 ml-2 mr-2 z-0 bg-white lg:w-[100%] lg:pb-4 rounded-3xl lg:max-w-[72rem] sm:max-w-screen-sm pb-4"
        >
          {userChannelData.coverImage ? (
            <div className="flex flex-row z-0 relative">
              <img
                src={userChannelData.coverImage}
                alt={userChannelData.coverImage}
                className="rounded-t-3xl lg:w-[72rem] lg:h-[20rem] sm:w-full sm:h-20 md:h-20 md:w-full w-full h-[11rem]"
              ></img>
              <div className="z-10 ml-[94%] mt-[26%] absolute">
                <Camera />
              </div>
            </div>
          ) : (
            <div className="flex flex-row z-0 relative">
              <img
                src="/Simple Shiny.svg"
                alt={profile.backgroundImg}
                className="rounded-t-3xl lg:w-[72rem] lg:h-[20rem] sm:w-full sm:h-20 md:h-20 md:w-full w-full h-[11rem]"
              ></img>
              <div className="z-10 ml-[95%] mt-[23%] absolute">
                <Camera />
              </div>
            </div>
          )}
          <div className="lg:mt-[-6rem] lg:ml-16 mt-[-4.5rem] ml-6">
            <Avatar
              sx={{
                width: { xs: "7rem", lg: "9rem" },
                height: { xs: "7rem", lg: "9rem" },
                border: "2px solid white",
                fontSize: { xs: "2rem", sm: "2rem", md: "2rem", lg: "3rem" },
                zIndex: "20",
              }}
              src={userChannelData.avatar}
              alt={userChannelData.username}
            />
          </div>
          <h1 className="lg:mt-6 text-3xl lg:ml-20 mt-6 ml-4">
            {userChannelData.fullName}
          </h1>
          <p className="lg:ml-20 ml-4">{profile.bio}</p>
          <div className="flex item-center lg:ml-20 ml-4">
            {profile.district},{profile.state},{profile.country}
            <div className="bg-[#a3a3a3] h-1 w-1 rounded-full ml-2 mt-3"></div>
            <Button
              variant="plain"
              color="neutral"
              onClick={() => setOpen(true)}
              sx={{
                width: "8rem",
                padding: "none",
                ":hover": { background: "none" },
                marginLeft: "-0.6rem",
                marginTop: "-.2rem",
              }}
            >
              Contact Info.
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
              <ModalDialog>
                <DialogTitle>{userChannelData.fullName}</DialogTitle>
                <Divider />
                <DialogContent>Contact Info</DialogContent>
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>
                      <LinkIcon
                        sx={{ marginRight: "10px", fontSize: "16px" }}
                      />
                      Profile Link
                    </FormLabel>
                    <h1 className="ml-7">{profile.link}</h1>
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <LocalPhoneIcon
                        sx={{ marginRight: "10px", fontSize: "16px" }}
                      />
                      Phone
                    </FormLabel>
                    <h1 className="ml-7">{profile.phone}</h1>
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <AlternateEmailIcon
                        sx={{ marginRight: "10px", fontSize: "16px" }}
                      />
                      Email
                    </FormLabel>
                    <h1 className="ml-7">{userChannelData.email}</h1>
                  </FormControl>
                </Stack>
              </ModalDialog>
            </Modal>
          </div>
          <div className="lg:ml-20 lg:mt-2 mt-2 ml-4">
            <Button
              varient="contained"
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit Profile
            </Button>
          </div>
          <Modal
            open={edit}
            onClose={() => {
              setEdit(false);
            }}
          >
            <ModalDialog sx={{ maxHeight: "30rem", overflow: "scroll" }}>
              <DialogTitle>Edit Your Profile</DialogTitle>
              <DialogContent>Change things about yourself.</DialogContent>
              <Divider />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
              >
                <Stack spacing={2}>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    sx={{
                      width: { xs: "18rem", lg: "42rem" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      Profile
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack spacing={2}>
                        <FormControl>
                          <FormLabel>Name</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Bio</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl>
                          <FormLabel>District</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl>
                          <FormLabel>State</FormLabel>
                          <Autocomplete
                            {...selectStates}
                            disableClearable
                            size="small"
                            renderInput={(params) => (
                              <TextField {...params} varient="standard" />
                            )}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Country</FormLabel>
                          <Autocomplete
                            id="country-autocomplete"
                            options={countries}
                            getOptionLabel={(option) => option.country}
                            value={selectedCountry}
                            onChange={(event, newValue) =>
                              handleCountryChange(
                                newValue ? newValue.country : null
                              )
                            }
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </FormControl>
                        <FormControl>
                          <Button
                            variant="outlined"
                            sx={{
                              width: { xs: "16rem", lg: "40rem" },
                              marginTop: "1rem",
                            }}
                          >
                            Save
                          </Button>
                        </FormControl>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    sx={{
                      width: { xs: "18rem", lg: "42rem" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      Education
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack spacing={2}>
                        <FormControl>
                          <FormLabel>Institution's Name</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Degree</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Field of Study</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Start Date</FormLabel>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker views={["month", "year"]} />
                          </LocalizationProvider>
                        </FormControl>
                        <FormControl>
                          <FormLabel>End Date</FormLabel>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker views={["month", "year"]} />
                          </LocalizationProvider>
                        </FormControl>
                        <FormControl>
                          <Button
                            variant="outlined"
                            sx={{
                              width: { xs: "16rem", lg: "40rem" },
                              marginTop: "1rem",
                            }}
                          >
                            Save
                          </Button>
                        </FormControl>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    sx={{
                      width: { xs: "18rem", lg: "42rem" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      Skills
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack spacing={2}>
                        <FormControl>
                          <FormLabel>Add your Skills</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl></FormControl>
                        <FormControl>
                          <Button
                            variant="outlined"
                            sx={{
                              width: { xs: "16rem", lg: "40rem" },
                              marginTop: "1rem",
                            }}
                          >
                            Save
                          </Button>
                        </FormControl>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    sx={{
                      width: { xs: "18rem", lg: "42rem" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      Experience
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack spacing={2}>
                        <FormControl>
                          <FormLabel>Job Title</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Company Name</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Job Type</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Start Date</FormLabel>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker views={["month", "year"]} />
                          </LocalizationProvider>
                        </FormControl>
                        <FormControl>
                          <FormLabel>End Date</FormLabel>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker views={["month", "year"]} />
                          </LocalizationProvider>
                        </FormControl>
                        <FormControl>
                          <FormLabel>State</FormLabel>
                          <Autocomplete
                            {...selectStates}
                            disableClearable
                            size="small"
                            renderInput={(params) => (
                              <TextField {...params} varient="standard" />
                            )}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Country</FormLabel>
                          <Autocomplete
                            {...selectCountries}
                            disableClearable
                            size="small"
                            renderInput={(params) => (
                              <TextField {...params} varient="standard" />
                            )}
                          />
                        </FormControl>
                        <FormControl>
                          <Button
                            variant="outlined"
                            sx={{
                              width: { xs: "16rem", lg: "40rem" },
                              marginTop: "1rem",
                            }}
                          >
                            Save
                          </Button>
                        </FormControl>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                    sx={{
                      width: { xs: "18rem", lg: "42rem" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5bh-content"
                      id="panel5bh-header"
                    >
                      Achivement
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack spacing={2}>
                        <FormControl>
                          <FormLabel required>Achivement Title</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl>
                          <FormLabel>About</FormLabel>
                          <Input autoFocus />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Start Date</FormLabel>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Controlled picker"
                              value={value}
                              onChange={(newValue) => setValue(newValue)}
                            />
                          </LocalizationProvider>
                        </FormControl>
                        <FormControl>
                          <FormLabel>End Date</FormLabel>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Controlled picker"
                              value={value}
                              onChange={(newValue) => setValue(newValue)}
                            />
                          </LocalizationProvider>
                        </FormControl>
                        <FormControl>
                          <Button
                            variant="outlined"
                            sx={{
                              width: { xs: "16rem", lg: "40rem" },
                              marginTop: "1rem",
                            }}
                          >
                            Save
                          </Button>
                        </FormControl>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default TopProfile;
