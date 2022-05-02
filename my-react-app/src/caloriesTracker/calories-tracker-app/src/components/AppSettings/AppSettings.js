import React from 'react';
import "../../App.css";

const AppSettings = ({verifyHandler, email, password, setEmail, setPassword}) => {

  const onVerifySubmitClick = () => {
    verifyHandler();
  }

  return (
    <div className="app__settings">
            <div className="app__settings">
                <input type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={onVerifySubmitClick}>Verify Me!</button>
            </div>
        </div>
  )
}
export default AppSettings;
