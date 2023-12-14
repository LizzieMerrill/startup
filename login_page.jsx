import React from 'react';

export function Login_Page() {
  return (
    <main>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<button type="button" onclick="location.href='create_account.html'">Sign Up</button>
<br/><br/><br/>
<h4 id="log-in-text">Already a member? Log In</h4>
<input type="text" id="login-username" placeholder="Enter Username" name="username" required> 
<label>Password : </label> 
<input type="password" id="login-password" placeholder="Enter Password" name="password" required> 
<button type="submit" onclick="login()">Login</button>
<br/><br/><br/><br/><br/><br/>
    </main>
  );
}