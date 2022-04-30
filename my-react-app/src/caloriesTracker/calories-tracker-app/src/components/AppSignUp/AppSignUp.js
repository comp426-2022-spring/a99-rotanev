import React from 'react'

const AppSignUp = () => {
  return (
    <div className = "app__signup">
        <h1>Sign Up</h1>
        <form>
        <label><b>Name</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />
        </form>
    </div>
  )
}

export default AppSignUp

