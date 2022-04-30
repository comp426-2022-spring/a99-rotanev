import React from 'react'

const AppSignUp = ({signUp,firstname,lastname,email,birthday,password,confirmpassword}) => {
  
    const onSignUpSubmitClick = ()=> {
        signUp();
    }
    return (
        <div className = "app__signup">
            <h1>Sign Up</h1>
            <form>         
                <label><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="firstname" value={firstname} required />

                <label><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lastname" value={lastname} required />

                <label><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="email" value={email} required />

                <label><b>Birthday</b></label>
                <input type="date" placeholder="Enter Birthday" name="birthday" value={birthday} required />

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={password} required />

                <label><b>Confirm Password</b></label>
                <input type="password" placeholder="Enter Confirm Password" name="confirmpassword"  value={confirmpassword} required />

                <button onClick={onSignUpSubmitClick}>Sign Up!</button>
            </form>
        </div>
    )
}

export default AppSignUp

