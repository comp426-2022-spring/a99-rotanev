import React from 'react';
import "../../App.css";
import AppNavBarLog from '../AppNavBar/AppNavBarLog';

const AppLogIn = ({logIn, email, password}) => {

  const onLogInSubmitClick = ()=> {
        logIn();
  }

  return (
    <div className = "app__login">
      <AppNavBarLog/>
        <center><h1 className = "login">Log In</h1></center>
        <div className = "formbox">
        <form>    
            <div className="one">
            <label><b>Email:  </b></label>
            <input type="email" placeholder="Enter Email" name="email" value={email} required />
            </div>

            <div className="one">
            <label><b>Password: </b></label>
            <input type="password" placeholder="Enter Password" name="password" value={password} required />
            </div>

            <div className="one">
            <input onClick={onLogInSubmitClick} type="submit" value="Log In!"/>
            </div>
        </form>
      </div>
    </div>
  )
}
export default AppLogIn;