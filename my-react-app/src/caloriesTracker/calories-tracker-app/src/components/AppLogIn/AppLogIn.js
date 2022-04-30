import React from 'react'

const AppLogIn = () => {
    return (
      <div className = "app__signup">
          <h1>Log In</h1>
          <form>
          <label><b>Name</b></label>
          <input type="text" placeholder="Enter Name" name="name" required />
          </form>
      </div>
    )
  }
  
  export default AppLogIn