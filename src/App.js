import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact-me" element={<ContactPage />} />
        <Route path="/*" element={<Navigate to="/about-me" />} />
      </Routes>
    </div>
  );
}

export default App;
