import React from 'react';

export function Create_Account() {
  return (
    <main>
    <h1 id="sign-up-text">Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input id="signup-email" type="text" placeholder="Enter Email" name="email" required/>

    <label for="signup-username"><b>Username</b></label>
    <input id="signup-username" type="text" placeholder="Enter Username" name="signup-username" required/>

    <label for="psw"><b>Password</b></label>
    <input id="signup-password" type="password" placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input id="signup-password-confirmation" type="password" placeholder="Repeat Password" name="psw-repeat" required/>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"/> Remember me
    </label>

    <p>By creating an account you agree to our <a href="terms_and_privacy.html" style="color:dodgerblue">Terms & Privacy</a>.</p>

    <div className="clearfix">
      <button type="button" className="cancelbtn" onclick="location.href='index.html'">Cancel</button>
      <button type="submit" className="signupbtn" onclick="signUp()">Sign Up</button>
    </div>
    </main>
  );
}