import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase/firebase";
import { signOut } from "firebase/auth";

import SignUp from "./pages/signup/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/signup/SignIn";
import Home from "./pages/Home/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/signin";
    });
  };

  return (
    <div className='page'>
      <Router>
        <Navbar isAuth={isAuth} />
        <Routes>
          <Route exact path='/' element={<Home isAuth={isAuth} />} />
          <Route
            exact
            path='/signup'
            element={<SignUp setIsAuth={setIsAuth} />}
          />
          <Route
            exact
            path='/signin'
            element={<SignIn setIsAuth={setIsAuth} />}
          />
          <Route
            exact
            path='/dashboard'
            element={<Dashboard isAuth={isAuth} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
