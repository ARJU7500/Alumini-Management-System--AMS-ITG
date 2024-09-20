import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Connections from "./pages/Connections";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat/Chat";
// import Project from "./pages/Projects"
import Header from "./components/Header";
import Gate from "./components/Gate";
import Notifications from "./pages/Notifications";
import ViewAchivement from "./pages/ViewAchivement";
import ViewSkills from "./pages/ViewSkills";
import ViewEducation from "./pages/ViewEducation";
import ViewPost from "./pages/ViewPost";
import ViewExperience from "./pages/ViewExperience";
import Event from "./pages/Event";
import Comment from "./components/Comment";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Gate>
        <Header />
      </Gate>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile/skill" element={<ViewSkills />} />
        <Route path="/profile/education" element={<ViewEducation />} />
        <Route path="/profile/activity" element={<ViewPost />} />
        <Route path="/profile/achivement" element={<ViewAchivement />} />
        <Route path="/profile/experience" element={<ViewExperience />} />
        <Route path="/Event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
