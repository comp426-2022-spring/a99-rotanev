import React from 'react'

const AppSignUp = () => {
  return (
    <div className = "app__signup">
        <h1>Sign Up</h1>
        <form>         
            <label><b>First Name</b></label>
            <input type="text" placeholder="Enter First Name" name="firstname" required />

            <label><b>Last Name</b></label>
            <input type="text" placeholder="Enter Last Name" name="lastname" required />

            <label><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required />

            <label><b>Birthday</b></label>
            <input type="date" placeholder="Enter Birthday" name="birthday" required />

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />

            <label><b>Confirm Password</b></label>
            <input type="password" placeholder="Enter Confirm Password" name="confirmpassword" required />

            <input type="submit"  name="submitbuttonsignup" value="Sign Up!"/>
        </form>
    </div>
  )
}

export default AppSignUp

