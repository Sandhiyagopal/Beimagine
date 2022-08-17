import React from "react";
import Navbar from "./Navbar";
import Login from "./components/Login";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
