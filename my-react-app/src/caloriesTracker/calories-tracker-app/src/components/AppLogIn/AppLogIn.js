import React from 'react';
import "../../App.css";
import AppNavBarLog from '../AppNavBar/AppNavBarLog';
import axios from "axios";

const AppLogIn = () => {

  const onLogInSubmitClick = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

      axios.post("http://localhost:5000/app/accountexists/", { email: email, password: password }).then((res) => {
          console.log("now i have done the axios");
          if (res.data == "account found!") {
            window.location.href = "./login"; 
          }
          else{
            alert("You do not have an account with this email address. Please sign up for an account!");
            window.location.href = "./";
            /*axios.post("http://localhost:5000/app/adduser", {
              firstname: firstname,
              lastname: lastname,
              email: email,
              birthday: birthday,
              password: password,
            });
            console.log(window.location.href);
            window.location.href = "./caloriecounter"; */
          } 
        });
  }

  return (
    <div className = "app__login">
      <AppNavBarLog/>
        <center><h1 className = "login">Log In</h1></center>
        <div className = "formbox">
        <form onSubmit={onLogInSubmitClick}>    
            <div className="one">
            <label><b>Email:  </b></label>
            <input type="email" placeholder="Enter Email" name="email" required />
            </div>

            <div className="one">
            <label><b>Password: </b></label>
            <input type="password" placeholder="Enter Password" name="password" required />
            </div>

            <div className="one">
            <input type="submit" value="Log In!"/>
            </div>
        </form>
      </div>
    </div>
  )
}
export default AppLogIn;