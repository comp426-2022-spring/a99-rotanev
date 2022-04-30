import React from 'react'

const AppLogIn = ({logIn, email, password}) => {

  const onLogInSubmitClick = ()=> {
        logIn();
  }

  return (
    <div className = "app__login">
        <h1 className = "login">Log In</h1>
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