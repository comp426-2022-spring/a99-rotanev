import React from 'react'
import { NavLink } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const AppNavBar = () => {
  return (
    <div className = "app__navigation_bar">
        <a href='../../pages/index.html'>Home</a>
        <a>Calorie Counter</a>
        <a>Login</a>
        <a>Sign Up</a>
    </div>
  )
}

export default AppNavBar