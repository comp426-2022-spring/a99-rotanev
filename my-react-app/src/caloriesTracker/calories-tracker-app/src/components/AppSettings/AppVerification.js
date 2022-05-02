import React from 'react';
import "../../App.css";
import AppNavBarLogged from '../AppNavBar/AppNavBarLogged';

const AppSettings = (/*{signUp, setCurrentPage,
    firstname,lastname,email,birthday,password,confirmpassword,
    setFirstName, setLastName, setEmail, setBirthday, setPassword, setConfirmPassword}*/) => {

  const onVerificationSubmitClick = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    
  }

  return (
    <div className = "app__verification">
      <AppNavBarLogged/>
        <h1 className = "signup">Email Verification</h1>
        <div className = "formbox">
        <form onSubmit={(e)=>onVerificationSubmitClick(e)}>    
            
            <div className="one">
            <label><b>Please verify your email address: </b></label>
            <input type="email" placeholder="Enter Email" name="email" /*value={email} onChange={(e)=>setEmail(e.target.value)}*/ required />
            </div>

            <div className="one">
            <input type="submit" value="Sign Up!"/>
            </div>
        </form>
      </div>
    </div>
  )
}
export default AppSettings;
