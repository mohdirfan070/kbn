import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Attendance from "./pages/Attendance/Attendance.jsx";
import LoginForm from "/src/components/LoginForm";
import Profile from "./pages/Profile/Profile.jsx";
import Cse from "./components/Cse.jsx";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/attendance/cse" element={<Cse />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
