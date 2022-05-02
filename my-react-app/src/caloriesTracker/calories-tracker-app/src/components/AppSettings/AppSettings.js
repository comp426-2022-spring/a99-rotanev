import React from 'react';
import "../../App.css";
import AppNavBarLogged from '../AppNavBar/AppNavBarLogged';

const AppSettings = (/*{signUp, setCurrentPage,
    firstname,lastname,email,birthday,password,confirmpassword,
    setFirstName, setLastName, setEmail, setBirthday, setPassword, setConfirmPassword}*/) => {

  const onSignUpSubmitClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className = "app__settings">
      <AppNavBarLogged/>
        <h1 className = "signup">User Information</h1>
        <div className = "formbox">
        <form onSubmit={(e)=>onSignUpSubmitClick(e)}>    
            <div className="one">    
            <label><b>Please verify your email address: </b></label>
            <input type="text" placeholder="Enter First Name" name="firstname" value={firstname} onChange={(e)=>setFirstName(e.target.value)} required />
            </div>

            <div className="one">
            <label><b>Last Name:  </b></label>
            <input type="text" placeholder="Enter Last Name" name="lastname" value={lastname} onChange={(e)=>setLastName(e.target.value)} required />
            </div>

            <div className="one">
            <label><b>Email Address: </b></label>
            <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>

            <div className="one">
            <label><b>Birthday:  </b></label>
            <input type="date" placeholder="Enter Birthday" name="birthday" value={birthday} onChange={(e)=>setBirthday(e.target.value)} required />
            </div>

            <div className="one">
            <label><b>Password: </b></label>
            <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>

            <div className="one">
            <label><b>Confirm Password: </b></label>
            <input type="password" placeholder="Confirmed Password" name="confirmpassword" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} required />
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
