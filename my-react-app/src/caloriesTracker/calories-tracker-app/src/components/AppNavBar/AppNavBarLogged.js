import React from 'react';
import "../../App.css";

const AppNavBar = () => {
  return (
    <div className = "app__navigation_bar">
        <a href="/caloriecounter">Calorie Counter</a>
        <a href="/logout">Log Out</a>
        <a href="/settings">Settings</a>
    </div>
  )
}

export default AppNavBar;