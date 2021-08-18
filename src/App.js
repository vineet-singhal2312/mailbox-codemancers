import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MailBox from "./pages/MailBox/MailBox";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:category" element={<MailBox />} />
        <Route path="/" element={<MailBox />} />
      </Routes>
    </div>
  );
}


export default App;
