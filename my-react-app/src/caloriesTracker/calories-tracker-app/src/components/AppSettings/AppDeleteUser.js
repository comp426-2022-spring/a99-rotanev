import React from 'react';
import "../../App.css";
import axios from "axios";

const AppSettings = () => {

  const onDeleteSubmitClick = (e) => {

    e.preventDefault();

    const email = e.target.email.value;

    axios.post("http://localhost:5000/app/deleteuser/", {email: email}).then((res) => {
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
       alert("User has been deleted!");
       window.location.href="./";

      //axios.post("http://localhost:5000/app/adduser/", {firstname: firstname, lastname: lastname, email: email, birthday: birthday, password: password, oldpassword: oldpassword}
  }

  return (
    <div className="app__settings">
            <div className="app__settings">
              <form onSubmit={onDeleteSubmitClick}>
                <h1>To confirm the deletion of your account, please re-enter your information:</h1>
                  <input type="text" placeholder="Enter Email" name="email" required/>
                  <input type="password" placeholder="Enter Password" name="password" required/>

                  <input type="submit" value="Delete Account!"></input>
              </form>
            </div>
        </div>
  )
}
export default AppSettings;
