import React, { useState, createContext } from "react";
import "./App.css";
import Home from "./Home";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export let MytaskContext = createContext();

let App = () => {
  let [tasks, setTasks] = useState([]);
  return (
    <MytaskContext.Provider value={{ tasks, setTasks }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/addtask" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </MytaskContext.Provider>
  );
};

export default App;