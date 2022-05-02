import React from 'react';
import "../../App.css";

const onLogoutClick = (e) => {
  localStorage.clear();
  window.location.href = "./login"; 
}

const AppNavBar = () => {
  return (
    <div className = "app__navigation_bar">
        <a href="/caloriecounter">Calorie Counter</a>
        <a onClick={onLogoutClick}>Log Out</a>
        <a href="/delete">Delete User</a>
        <a href="/settings">Settings</a>
    </div>
  )
}

export default AppNavBar;