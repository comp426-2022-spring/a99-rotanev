import React from 'react';
import "../../App.css";

const AppNavBar = () => {
  return (
    <div className = "app__navigation_bar">
        <a href="/login">Login</a>
        <a href="/">Sign Up</a>
    </div>
  )
}

export default AppNavBar;