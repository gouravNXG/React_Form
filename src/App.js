import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import Welcome from "./Screens/Welcome";
import Main from "./Screens/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/Login/:id" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
