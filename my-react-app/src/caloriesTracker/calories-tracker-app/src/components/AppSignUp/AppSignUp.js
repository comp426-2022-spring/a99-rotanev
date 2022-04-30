import React from 'react'

const AppSignUp = () => {
  return (
    <div className = "app__signup">
        <h1 className = "signup">Sign Up</h1>
        <div className = "formbox">
        <form>    
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
            <input type="submit"  name="submitbuttonsignup" value="Sign Up!"/>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AppSignUp

