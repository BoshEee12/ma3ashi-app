import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUp from "./pages/signup/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewEntry from './components/NewEntry/NewEntry'
import SignIn from "./pages/signup/SignIn";
import Home from "./pages/Home/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


 

  return (
    <div className='page'>
      <Router>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route exact path='/' element={<Home isAuth={isAuth} />} />
          <Route
            
            path='/signup'
            element={<SignUp setIsAuth={setIsAuth} />}
          />
          <Route
            
            path='/signin'
            element={<SignIn setIsAuth={setIsAuth} />}
          />
          <Route
            
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route
            
            path='/add-entry'
            element={<NewEntry />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
