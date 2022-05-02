import React from 'react';
import "../../App.css";
import axios from "axios";

const AppSettings = () => {

  const onVerifySubmitClick = (e) => {
    e.preventDefault();
    
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const birthday = e.target.birthday.value;
    const password = e.target.password.value;
    const oldpassword = e.target.oldpassword.value;

    axios.post("http://localhost:5000/app/updateuser/", {firstname: firstname, lastname: lastname, email: email, birthday: birthday, password: password, oldpassword: oldpassword}).then((res) => {
        /*if(res.data == "your account doesn't exist!"){
          alert("There is no email with that account!");
        }
        else if(res.data == "your password is invalid!"){ 
          alert("Please enter the correct password for your account!")
        }
        else{
          console.log(res.data);
          alert("Name: "+firstname);
        }
        */
       });
       window.location.href="./settings";
      //axios.post("http://localhost:5000/app/adduser/", {firstname: firstname, lastname: lastname, email: email, birthday: birthday, password: password, oldpassword: oldpassword}
  }

  return (
    <div className="app__settings">
            <div className="app__settings">
              <form onSubmit={onVerifySubmitClick}>
                <h1>Enter your email and password</h1>
                  <input type="text" placeholder="Enter Email" name="email" required/>
                  <input type="password" placeholder="Enter Password" name="oldpassword" required/>

                  <h1>Enter any user information you'd like to change</h1>
                  <input type="text" placeholder="Enter New First Name" name="firstname" required/> 
                  <input type="text" placeholder="Enter New Last Name" name="lastname" required/>
                  <input type="date" placeholder="Enter New Birthday" name="birthday" required/>
                  <input type="password" placeholder="Enter Password" name="password" required/>

                  <input type="submit" value="Update!"></input>
              </form>
            </div>
        </div>
  )
}
export default AppSettings;
