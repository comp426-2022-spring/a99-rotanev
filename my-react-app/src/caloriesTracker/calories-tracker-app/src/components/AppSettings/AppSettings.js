import React from 'react';
import "../../App.css";

const AppSettings = ({verifyHandler, email, password, setEmail, setPassword}) => {

  const onVerifySubmitClick = () => {
    verifyHandler();
  }

  return (
    <div className="app__settings">
            <div className="app__settings">
            <h1>Enter your email and password</h1>
              <input type="text"
                  placeholder="Enter Email"
                  /*
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  */
              />
              <input type="password"
                  placeholder="Enter Password"
              />

              <h1>Enter any user information you'd like to change</h1>
              <input type="text"
                  placeholder="Enter New First Name"
              />
              <input type="text"
                  placeholder="Enter New Last Name"
              />
              <input type="email"
                  placeholder="Enter New Email"
              />
              <input type="date"
                  placeholder="Enter New Birthday"
              />
              <input type="password"
                  placeholder="Enter Password"
              />

              <button onClick={onVerifySubmitClick}>Update information!</button>
            </div>
        </div>
  )
}
export default AppSettings;
