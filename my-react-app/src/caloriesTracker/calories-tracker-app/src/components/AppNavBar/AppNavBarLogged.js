import React from 'react';
import "../../App.css";

const onLogoutClick = (e) => {
  localStorage.clear();
  window.location.href = "./"; 

}

const AppNavBar = () => {
  return (
    <div className = "app__navigation_bar">
        <a href="/caloriecounter">Calorie Counter</a>
        <a onSubmit={onLogoutClick}>Log Out</a>
        <a href="/settings">Settings</a>
    </div>
  )
}

export default AppNavBar;