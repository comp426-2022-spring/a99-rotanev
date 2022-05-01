import React from 'react';
import "../../App.css";
import AppNavBarLog from '../AppNavBar/AppNavBarLog';

import { Link } from "react-router-dom";
import axios from "axios";

const AppSignUp = () => {

  const onSignUpSubmitClick = (e) => {
    e.preventDefault();
    
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const birthday = e.target.birthday.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;

    // Check if the passwords are the same
    if (password === confirmpassword) {
      axios.post("http://localhost:5000/app/emailexists/", { email: email }).then((res) => {
          if (res.data == "account found!") {
            alert("You have already signed up with this email address. Please login!");
            window.location.href = "./login"; 
          }
          else{
            axios.post("http://localhost:5000/app/adduser", {
              firstname: firstname,
              lastname: lastname,
              email: email,
              birthday: birthday,
              password: password,
            });
            console.log(window.location.href);
            window.location.href = "./caloriecounter"; 
          } 
        });
    } else {
      alert("Please confirm the correct password!");
    }
  }

  return (
    <div className = "app__signup">
      <AppNavBarLog/>
        <h1 className = "signup">Sign Up</h1>
        <div className = "formbox">
        <form onSubmit={onSignUpSubmitClick}>    
            <div className="one">    
            <label><b>First Name: </b></label>
            <input type="text" placeholder="Enter First Name" name="firstname" required />
            </div>

            <div className="one">
            <label><b>Last Name:  </b></label>
            <input type="text" placeholder="Enter Last Name" name="lastname" required />
            </div>

            <div className="one">
            <label><b>Email:  </b></label>
            <input type="email" placeholder="Enter Email" name="email" required />
            </div>

            <div className="one">
            <label><b>Birthday:  </b></label>
            <input type="date" placeholder="Enter Birthday" name="birthday" required />
            </div>

            <div className="one">
            <label><b>Password: </b></label>
            <input type="password" placeholder="Enter Password" name="password" required />
            </div>

            <div className="one">
            <label><b>Confirm Password: </b></label>
            <input type="password" placeholder="Confirmed Password" name="confirmpassword" required />
            </div>

            <div className="one">
            <input type="submit" value="Sign Up!"/>
            </div>
        </form>
      </div>
    </div>
  )
}
export default AppSignUp;
