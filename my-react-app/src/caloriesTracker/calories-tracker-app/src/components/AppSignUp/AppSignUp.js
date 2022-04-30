import React from 'react'

const AppSignUp = ({signUp,firstname,lastname,email,birthday,password,confirmpassword}) => {

  const onSignUpSubmitClick = ()=> {
        signUp();
  }

  return (
    <div className = "app__signup">
        <h1 className = "signup">Sign Up</h1>
        <div className = "formbox">
        <form>    
            <div className="one">    
            <label><b>First Name: </b></label>
            <input type="text" placeholder="Enter First Name" name="firstname" value={firstname} required />
            </div>

            <div className="one">
            <label><b>Last Name:  </b></label>
            <input type="text" placeholder="Enter Last Name" name="lastname" value={lastname} required />
            </div>

            <div className="one">
            <label><b>Email:  </b></label>
            <input type="email" placeholder="Enter Email" name="email" value={email} required />
            </div>

            <div className="one">
            <label><b>Birthday:  </b></label>
            <input type="date" placeholder="Enter Birthday" name="birthday" value={birthday} required />
            </div>

            <div className="one">
            <label><b>Password: </b></label>
            <input type="password" placeholder="Enter Password" name="password" value={password} required />
            </div>

            <div className="one">
            <label><b>Confirm Password: </b></label>
            <input type="password" placeholder="Confirmed Password" name="confirmpassword" value={confirmpassword} required />
            </div>

            <div className="one">
            <input onClick={onSignUpSubmitClick} type="submit" value="Sign Up!"/>
            </div>
        </form>
      </div>
    </div>
  )
}
export default AppSignUp;