import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import all components

import ExcercisesList from "./components//ExcercisesList";
import EditExcercises from "./components/EditExcercises";
import CreateExcercise from "./components/CreateExcercise";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
    <div className='container'>
      <Navbar />
      <br/>
      <Routes>
      <Route path="/"  element={<ExcercisesList />} />
      <Route path="/edit/:id" element={<EditExcercises />} />
      <Route path="/create" element={<CreateExcercise />} />
      <Route path="/user"  element={<CreateUser />} />
      </Routes>
  </div>
  </Router>
  );
}

export default App;
